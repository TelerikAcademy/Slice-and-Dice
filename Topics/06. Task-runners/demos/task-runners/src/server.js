const path = require("path");


const config = require("./config");
let data = require("./server/data");
let app = require("./config/application").create(data);

app.get("/", (req, res) => {
    return res.sendFile(path.join(__dirname, "/index.html"));
});

console.log("Updated!");

app.listen(config.port, () => `App running at :${config.port}`);