import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 5000;
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let table = [];
let workTable = [];

app.get("/", (req, res)=>{
    res.render("index.ejs");
});

app.get("/today", (req, res)=>{
    res.render("index.ejs", { list: table,});
});

app.get("/work", (req, res)=>{
    res.render("work.ejs", { work: workTable,});
});

app.post("/add", (req, res)=>{
    table.push(req.body["element"]);
    res.render("index.ejs", { list: table,} );
});

app.post("/addwork", (req, res)=>{
    workTable.push(req.body["element"]);
    res.render("work.ejs", { work: workTable,} );
});

app.listen(PORT, ()=>{
    console.log("Started Listening to Port 5000");
});