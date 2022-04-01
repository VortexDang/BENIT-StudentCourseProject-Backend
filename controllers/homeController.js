const { v4: uuid } = require("uuid");

let listStudent = require("../users.json");

exports.getStudents = (req, res) => {
    console.log(`Users in the database: ${listStudent}`);
    res.send(listStudent);
}

exports.createStudent = (req, res) => {
    console.log(req);
    console.log(req.body.name);

    listStudent.push({ ...req.body, id: uuid() });

    console.log(`User [${req.body.name}] added to the database.`);
    res.status(200).send("CREATED STUDENT");
};

exports.getStudent = (req, res) => {
    const user = listStudent.find((user) => (user.id).toString() === req.params.id);
    res.send(user);
    res.status(200).send("CREATED STUDENT");
};

exports.deleteStudent = (req, res, next) => {
    console.log(`user with id ${req.params.id} has been deleted`);
    listStudent = listStudent.filter((student) => (student.id).toString() !== req.params.id);
    // res.redirect(200, 'http://localhost:3001/');
    res.status(200).send("DELETED STUDENT");
};

exports.updateStudent = (req, res) => {
    const student = listStudent.find((student) => student.id == req.params.id);

    student.studentName = req.body.studentName;
    student.age = req.body.age;
    student.courses = req.body.courses;

    console.log(`username has been updated to ${req.body.studentName}.age has been updated to ${req.body.age}`)
    res.status(200).send("UPDATED STUDENT");
};
