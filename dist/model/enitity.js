"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const db = new sequelize_1.default('lms', '', '', {
    //host: 'localhost',
    dialect: 'sqlite',
    storage: './data.db'
});
exports.db = db;
/// Course
const courseAttr = {
    id: { type: sequelize_1.default.INTEGER, autoIncrement: true, primaryKey: true, },
    name: { type: sequelize_1.default.STRING, allowNull: false, },
};
exports.Course = db.define('course', courseAttr);
/// batch
const batchAttr = {
    id: { type: sequelize_1.default.INTEGER, autoIncrement: true, primaryKey: true, },
    name: { type: sequelize_1.default.STRING, allowNull: false, },
};
exports.Batch = db.define('batch', batchAttr);
//lecture
const lectureAttr = {
    id: { type: sequelize_1.default.INTEGER, autoIncrement: true, primaryKey: true, },
    name: { type: sequelize_1.default.STRING, allowNull: false, },
};
exports.Lecture = db.define('lecture', lectureAttr);
///student
const studentAttr = {
    id: { type: sequelize_1.default.INTEGER, autoIncrement: true, primaryKey: true, },
    name: { type: sequelize_1.default.STRING, allowNull: false, },
};
exports.Student = db.define('student', studentAttr);
/// subject
const subjectAttr = {
    id: { type: sequelize_1.default.INTEGER, autoIncrement: true, primaryKey: true, },
    name: { type: sequelize_1.default.STRING, allowNull: false, },
};
exports.Subject = db.define('subject', subjectAttr);
///Teacher
const teacherAttr = {
    id: { type: sequelize_1.default.INTEGER, autoIncrement: true, primaryKey: true, },
    name: { type: sequelize_1.default.STRING, allowNull: false, },
};
exports.Teacher = db.define('teacher', teacherAttr);
// mapping 
exports.Course.hasMany(exports.Subject);
exports.Subject.belongsTo(exports.Course);
exports.Course.hasMany(exports.Batch);
exports.Batch.belongsTo(exports.Course);
exports.Batch.hasMany(exports.Lecture);
exports.Lecture.belongsTo(exports.Batch);
exports.Subject.hasMany(exports.Teacher);
exports.Teacher.belongsTo(exports.Subject);
exports.Lecture.belongsTo(exports.Subject, { as: 'subject' });
exports.Lecture.belongsTo(exports.Teacher, { as: 'teacher' });
exports.Student.belongsToMany(exports.Batch, { through: 'student_batch', onDelete: 'cascade', hooks: true });
exports.Batch.belongsToMany(exports.Student, { through: 'student_batch', onDelete: 'cascade', hooks: true });
db.sync().then(() => console.log("database created"))
    .catch((err) => console.log("could not create database"));
