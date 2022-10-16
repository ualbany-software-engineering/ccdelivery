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

const permsFor = uid => new Promise((res, rej) => {
  db.query("SELECT * FROM users WHERE uid = ?", uid, (err, result) => {
    if (err) {
      return rej(err);
    }

    if (!result.length) return res(1);

    if (result[0].admin) {
      res(3);
    } else if (result[0].deliverer) {
      res(2);
    } else if (result[0].banned) {
      res(0);
    } else {
      res(1);
    }
  });
});

// Auth
app.get("/api/users", async (req, res) => {
  var allUsers = [];
  admin
    .auth()
    .listUsers()
    .then(function (listUsersResult) {
      listUsersResult.users.forEach(function (userRecord) {
        // For each user
        var userData = userRecord.toJSON();
        allUsers.push(userData);
      });
      res.status(200).send(allUsers);
    })
    .catch(function (error) {
      console.log("Error listing users:", error);
      res.status(500).send(error);
    });
});

// TODO: authenticate requester
app.get("/api/users/:uid", async (req, res) => {
  const uid = req.params.uid;
  db.query("SELECT * FROM users WHERE uid = ?", uid, (err, result) => {
    if (err) {
      return console.log(err);
    }
    res.send(result);
  });
});

app.patch("/api/users/:uid", async (req, res) => {
  const token = await admin.auth().verifyIdToken(req.headers.authorization);
  console.log(token);

  const perms = await permsFor(token.uid);
  const flags = [];

  if (perms !== 0) {
    flags.push('deliverer');
  }

  if (perms === 3) {
    flags.push('banned');
    flags.push('admin');
  }

  const uid = req.params.uid;
  const params = [];
  let queryString = 'UPDATE users SET ';

  for (const flag of flags) {
    const val = req.body[flag];
    if (val !== undefined) {
      queryString += `${flag} = ?,`;
      params.push(Boolean(val));
    }
  }

  console.log(params);
  if (params.length === 0) {
    res.send({});
    return;
  }

  db.query(`${queryString.slice(0, -1)} WHERE uid = ?`, [...params, uid], (err, result) => {
    if (err) {
      return console.log(err);
    }
    console.log(result);
    res.send(result);
  });
});

app.get("/api/users/:uid/perms", async (req, res) => {
  const perms = await permsFor(req.params.uid);
  res.send(perms.toString());
});

// TODO: authenticate requester
app.post("/api/users", (req, res) => {
  const uid = req.body.uid;

  db.query(
    "INSERT INTO users (uid) VALUES (?)",
    [uid],
    (error, results) => {
      if (error) {
        return console.error(error.message);
      }
      console.log("Rows affected:", results.affectedRows);
    }
  );
});

app.listen(5000, function () {
  console.log("CORS-enabled web server listening on port 5000");
});
