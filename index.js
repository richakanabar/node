
const express = require("express");
const app = express();

app.use(express.json());


app.use("/student",studentRoute);


app.listen(3000,() => {
    console.log(`Server is running at http://localhost:/`)
});