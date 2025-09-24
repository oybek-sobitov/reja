console.log("Web serverni boshlash");

const express = require('express');
const res = require('express/lib/response');
const app = express();  // app --> Object
const fs = require('fs');


// MongoDB Connection 
const db = require("./server").db();


let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if(err) {
        console.log("ERROR:", err);
    } else {
        user = JSON.parse(data);
    }
})


// Section - 1 (Enterence)

app.use(express.static("public"));
app.use(express.json());  // json format --> Object
app.use(express.urlencoded({extended: true}));

// Section - 2 (Session)



// Section - 3 (Views - BSSR)

app.set("views", "views");
app.set("view engine", "ejs");

// Section - 4 (Routing)

app.post("/create-item", (req, res) => {
    console.log("User entered /create-item");
    const new_reja = req.body.reja; 
    db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
        if(err) {
            console.log(err);
            res.end("Somthing went wrong"); 
        } else {
            res.end("Successfuly added");
        }
    });
});

app.get('/author', (req, res) => {
    res.render('author', { user: user });
})

app.get("/", function(req, res) {
    console.log("User entered /")
    db.collection("plans").find().toArray( (err, data) => {
        if(err) {
            console.log(err);
            res.end("Somthing went wrong")
        } else {
            console.log(data);
            res.render('reja', { items: data  });
        }
    });
});


module.exports = app;