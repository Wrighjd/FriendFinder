const express    = require("express");
const path       = require("path");
const bodyParser = require("body-parser");

const app  = express();
const PORT = process.env.PORT || 3000;

const directory_public = path.join(__dirname, "app", "public");
const directory_routes = path.join(__dirname, "app", "routes");


app.use(express.static(directory_public));


app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({"extended": true}));



const router_html = require(path.join(directory_routes, "htmlroutes.js"));
const router_api  = require(path.join(directory_routes, "apiroutes.js"));

app.use("/", router_html);
app.use("/api", router_api);




app.listen(PORT, () => console.log(`App listening on ${PORT}.`));