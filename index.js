
const express = require("express");
const cors = require("cors");
const PORT = 5000
const homeRouter = require("./routes/home.js");
const courseRouter = require("./routes/courses.js")
const studentsRouter = require("./routes/studentPage.js")

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.use("/students", homeRouter);
app.use("/courses", courseRouter);
app.use("/student-page", studentsRouter )


app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})