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
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
  }, [user, loading]);

  return (
    <div
      className="dashboard"
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <div className="dashboard__container">
        Logged in as
        <div>{user ? user.email : ""}</div>
        <Button buttonStyle="btn--outline" onClick={logout}>
          Logout
        </Button>
        <br />
        <Button
          style={{ marginTop: "3px" }}
          buttonStyle="btn--outline"
          onClick={() => {
            Axios.get(`http://localhost:80/api/firebase/get`).then((data) => {
              setUsers(data.data);
              setVisable(true);
              data.data.forEach((element) => {
                Axios.post("http://localhost:80/api/users/insert", {
                  email: element.email,
                  uid: element.uid,
                });
              });
            });
          }}
        >
          Insert All Users
        </Button>
        {visable &&
          users.map((val, key) => {
            return <div>{key + ": " + val.email + ": " + val.uid}</div>;
          })}
      </div>
    </div>
  );
}
export default Dashboard;
