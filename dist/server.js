"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/////
/* Submission by Mridul Garg (mridul.garg@nagarro.com)*/
/////
const express_1 = __importDefault(require("express"));
const enitity_1 = require("./model/enitity");
const course_1 = __importDefault(require("./routes/course"));
const subject_1 = __importDefault(require("./routes/subject"));
const student_1 = __importDefault(require("./routes/student"));
const teacher_1 = __importDefault(require("./routes/teacher"));
const app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const routes = {
    course: course_1.default,
    subject: subject_1.default,
    student: student_1.default,
    teacher: teacher_1.default
};
app.use('/course', routes.course);
app.use('/student', routes.student);
app.use('/teacher', routes.teacher);
app.use('/subject', routes.subject);
app.listen(5555, () => {
    enitity_1.db.sync();
    console.log("started");
});
