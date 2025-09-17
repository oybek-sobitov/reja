console.log("Web serverni boshlash");

const express = require('express');
const http = require('http');
const app = express();  // app --> Object

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

app.get("/", function(req, res) {
    res.render('harid');
});


const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
    console.log(`The server is running successfully on port: ${PORT}`);
});