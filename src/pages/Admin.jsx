import React, { useState, useEffect } from "react";
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Link, useNavigate } from "react-router-dom";
import { auth, logout } from "../api/firebase";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import Axios from "axios";

const Admin = () => {
  const [user, loading] = useAuthState(auth);
  const [perms, setPerms] = useState();
  const [users, setUsers] = useState();

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
        array.push(<button onClick={update.bind(this, item.uid)}>{index + ": " + item.uid}</button>);
      });
    }
    return array;
  }
  if(!user) return null;
	return (
    <Helmet title="Admin">
      <CommonSection title="Admin page" />

			<Container>
				<div className="dashboard">
					Logged in as {user.displayName}
					<table>
						<tr style={{ display: "inline-block" }}>
							<td>
								<button onClick={logout}>
									Logout
								</button>
							</td>
							{perms === 3 && (
								<td>
									<button className="addTOCart__btn" onClick={post}>
										Insert All Users
									</button>
								</td>
							)}
						</tr>
					</table>
					{users && <RenderUsers />}
				</div>
			</Container>
		</Helmet>
	);
};

export default Admin;