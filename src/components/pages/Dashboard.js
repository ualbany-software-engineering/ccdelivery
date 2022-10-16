import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "../css/Dashboard.css";
import { auth, logout } from "../../api/firebase";
import Axios from "axios";
import Button from "../Button";

function Dashboard() {
  const [user, loading] = useAuthState(auth);
  const [users, setUsers] = useState([]);
  const [perms, setPerms] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    Axios.get(`http://localhost:80/api/users/perms/${user.uid}`).then(
      (data) => {
        setPerms(parseInt(data.data));
      }
    );
    Axios.get(`http://localhost:80/api/firebase/get`).then((data) => {
      setUsers(data.data);
    });
  });

  function post() {
    users.forEach((element) => {
      Axios.post("http://localhost:80/api/users/insert", {
        email: element.email,
        uid: element.uid,
      });
    });
  }

  function RenderUsers() {
    let array = [];
    if (perms === 3) {
      users.forEach((item, index) => {
        array.push(<div>{index + ": " + item.email + ": " + item.uid}</div>);
      });
    }
    return array;
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
      <RenderUsers />
    </div>
  );
}
export default Dashboard;
