import "../../App.css";
import "./../css/Register.css";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerWithEmailAndPassword } from "../../api/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../api/firebase";
import Axios from "axios";


// https://blog.logrocket.com/user-authentication-firebase-react-apps/

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user] = useAuthState(auth);

  const register = async () => {
    const user = await registerWithEmailAndPassword(email, password);
    Axios.post("/api/users", {
      uid: user.uid,
    });
  };

  useEffect(() => {
    if (user) navigate("/");
  }, [user]);

  return (
    <div className="register">
      <div className="register__container">
        <input
          type="text"
          className="register__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="register__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button className="register__btn" onClick={register}>
          Register
        </button>
        <div>
          Already have an account? <Link to="/login">Login</Link> now.
        </div>
      </div>
    </div>
  );
}
export default Register;
