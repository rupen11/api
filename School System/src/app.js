const express = require('express');
require("../src/db/connection");
const Root = require('./Router/root');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(Root);

app.listen(port, () => {
    console.log(`Application Running at http://localhost:${port}/`);
});