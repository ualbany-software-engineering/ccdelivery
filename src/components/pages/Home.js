import "../../App.css";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../api/firebase";

function Display() {
  const [user] = useAuthState(auth);
  if (user) {
    return <div>Hi</div>;
  } else {
    return <div>Bye</div>;
  }
}

function Home() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const login = () => {
    navigate("/login");
  };
  return (
    <>
      <Display> </Display>
      {user && <div>hi</div>}
      <Button onClick={login} buttonStyle="btn--outline" style={{ margin: 5 }}>
        Button
      </Button>
    </>
  );
}

export default Home;
