const { v4: uuid } = require("uuid");

let listStudent = require("../users.json");

exports.getStudent = (req, res) => {
    const user = listStudent.find((user) => (user.id).toString() === req.params.id);
    res.send(user);
    res.status(200).send("GET STUDENT");
};

exports.updateStudent = (req, res) => {
    const student = listStudent.find((student) => student.id == req.params.id);

    student.name = req.body.name;
    student.age = req.body.age;
    student.course = req.body.course;

    console.log(`username has been updated to ${req.body.name}.age has been updated to ${req.body.age}`)
    res.status(200).send("DELETED STUDENT");
};


