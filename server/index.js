var express = require("express");
var cors = require("cors");
var app = express();
app.use(cors());
app.use(express.json());

const db = require("./config/mysql");

var admin = require("firebase-admin");
var serviceAccount = require("./firebase.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

app.get("/api/firebase/get", async (req, res) => {
  var allUsers = [];
  admin
    .auth()
    .listUsers()
    .then(function(listUsersResult) {
      listUsersResult.users.forEach(function(userRecord) {
        // For each user
        var userData = userRecord.toJSON();
        allUsers.push(userData);
      });
      res.status(200).send(allUsers);
    })
    .catch(function(error) {
      console.log("Error listing users:", error);
      res.status(500).send(error);
    });
});

app.get("/api/users/get/:uid", async (req, res) => {
  const uid = req.params.uid;
  db.query("SELECT * FROM users WHERE uid = ?", uid, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

app.get("/api/users/perms/:uid", async (req, res) => {
  const uid = req.params.uid;
  db.query("SELECT * FROM users WHERE uid = ?", uid, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result[0].admin === 1) {
      res.send("3");
    } else if (result[0].deliverer === 1) {
      res.send("2");
    } else if (result[0].banned === 0) {
      res.send("0");
    } else {
      res.send("1");
    }
  });
});

app.post("/api/users/insert", (req, res) => {
  const uid = req.body.uid;
  const email = req.body.email;

  db.query(
    "INSERT INTO users (uid, email) VALUES (?,?)",
    [uid, email],
    (error, results) => {
      if (error) {
        return console.error(error.message);
      }
      console.log("Rows affected:", results.affectedRows);
    }
  );
});

app.listen(80, function() {
  console.log("CORS-enabled web server listening on port 80");
});
