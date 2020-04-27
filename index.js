const express = require('express');
const requireDir = require('require-dir');
const routes = require("./src/routes");
const cors = require('cors');


const app = express();

app.use(express.json());
app.use(cors());

// requireDir('./src/models')

app.use("/api", require("./src/routes"));
// app.use(routes);

app.listen(process.env.PORT || 3333);
console.log('server listening on port ' + process.env.PORT);

