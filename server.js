console.log("Web serverni boshlash");

const express = require('express');
const http = require('http');
const res = require('express/lib/response');
const app = express();  // app --> Object
const fs = require('fs');

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
    console.log(req.body);
    res.json({test: "success"});
});

app.get('/author', (req, res) => {
    res.render('author', { user: user });
})

app.get("/", function(req, res) {
    res.render('harid');
});


const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
    console.log(`The server is running successfully on port: ${PORT}`);
});