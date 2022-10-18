import React, { useRef, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { auth, registerWithEmailAndPassword } from "../api/firebase";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import Axios from "axios";

const Register = () => {
  const signupNameRef = useRef();
  const signupPasswordRef = useRef();
  const signupEmailRef = useRef();
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  const [updateProfile] = useUpdateProfile(auth);

  useEffect(() => {
    if (user) navigate("/home");
  }, [user, loading]);

  const submitHandler = async (e) => {
    e.preventDefault();

    const user = await registerWithEmailAndPassword(
      signupEmailRef.current.value,
      signupPasswordRef.current.value
    );
    updateProfile({ displayName: signupNameRef.current.value });
    Axios.post("/api/users", {
      uid: user.uid,
    });
  };

  return (
    <Helmet title="Signup">
      <CommonSection title="Signup" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Full name"
                    required
                    ref={signupNameRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={signupEmailRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    ref={signupPasswordRef}
                  />
                </div>
                <button onClick={submitHandler} className="addTOCart__btn">
                  Sign Up
                </button>
              </form>
              <Link to="/login">Already have an account? Login</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Register;
