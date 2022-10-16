import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../../api/firebase";
import Axios from "axios";
import Button from "../Button";
import PageNotFound from "./PageNotFound";
import "../css/Dashboard.css";

function Dashboard() {
  const [user, loading] = useAuthState(auth);
  const [perms, setPerms] = useState();
  const [users, setUsers] = useState();
  console.log(user);

  useEffect(() => {
    if (loading || !user) return;
    (async () => {
      const perms = await Axios.get(`/api/users/${user.uid}/perms`);
      setPerms(parseInt(perms.data));

      const data = await Axios.get(`/api/users`);
      console.log(data);
      setUsers(data.data);
    })();
  }, [user, loading]);

  function post() {
    users.forEach((element) => {
      Axios.post("/api/users/", {
        uid: element.uid,
      });
    });
  }

  async function update (uid) {
    Axios.patch(`/api/users/${uid}`, {
      admin: true
    }, {
      headers: {
        'Authorization': await user.getIdToken(),
      }
    });
  }

  function RenderUsers() {
    let array = [];
    if (perms === 3) {
      users.forEach((item, index) => {
        array.push(<Button onClick={update.bind(this, item.uid)}>{index + ": " + item.uid}</Button>);
      });
    }
    return array;
  }

  if (user) {
    return (
      <div className="dashboard">
        {"Logged in as " + (user ? user.email : "")}
        <table>
          <tr style={{ display: "inline-block" }}>
            <td>
              <Button
                buttonSize="btn--small"
                buttonStyle="btn--outline"
                onClick={logout}
              >
                Logout
              </Button>
            </td>
             {perms === 3 && (
              <td>
                <Button
                  buttonStyle="btn--outline"
                  buttonSize="btn--small"
                  onClick={() => {
                    post();
                  }}
                >
                  Insert All Users
                </Button>
              </td>
            )}
          </tr>
        </table>
        {users && <RenderUsers />}
      </div>
    );
  } else {
    return <PageNotFound />;
  }
}
export default Dashboard;
