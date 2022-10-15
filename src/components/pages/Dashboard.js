import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "../css/Dashboard.css";
import { auth, logout } from "../../api/firebase";
import Axios from "axios";
import Button from "../Button";

function Dashboard() {
  const [user, loading] = useAuthState(auth);
  const [users, setUsers] = useState();
  const [visable, setVisable] = useState(false);
  const [perms, setPerms] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
  }, [user, loading]);

  const getPerms = () => {
    if(user) Axios.get(`http://localhost:80/api/users/perms/${user.uid}`).then((data) => {
      setPerms(parseInt(data.data));
    });
    return perms;
  }

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
          {getPerms() === 3 && <td>
            <Button
              buttonStyle="btn--outline"
              buttonSize="btn--small"
              onClick={() => {
                Axios.get(`http://localhost:80/api/firebase/get`).then(
                  (data) => {
                    setUsers(data.data);
                    setVisable(true);
                    data.data.forEach((element) => {
                      Axios.post("http://localhost:80/api/users/insert", {
                        email: element.email,
                        uid: element.uid,
                      });
                    });
                  }
                );
              }}
            >
              Insert All Users
            </Button>
          </td>}
        </tr>
      </table>
      {visable &&
        users.map((val, key) => {
          return <div>{key + ": " + val.email + ": " + val.uid}</div>;
        })}
    </div>
  );
}
export default Dashboard;
