var express = require("express");
var cors = require("cors");
var app = express();
app.use(cors());

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

app.listen(80, function() {
  console.log("CORS-enabled web server listening on port 80");
});
