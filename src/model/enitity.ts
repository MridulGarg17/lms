import Sequelize from 'sequelize';
import { DataTypeAbstract, DefineAttributeColumnOptions } from 'sequelize'
import { BatchI, CourseI, LectureI, StudentI, TeacherI, SubjectI } from './entityI';


declare global {
    type SequelizeAttributes<T extends { [key: string]: any }> = {
        [P in keyof T]: string | DataTypeAbstract | DefineAttributeColumnOptions;
    };
}

const db = new Sequelize('lms', '', '', {
    host: 'localhost',
    dialect: 'sqlite',
    storage : './data.db'
})

/// Course
const courseAttr: SequelizeAttributes<CourseI> = {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, },
    name: { type: Sequelize.STRING, allowNull: false, },

};
export const Course = db.define<CourseI, any>('course', courseAttr)

/// batch
const batchAttr: SequelizeAttributes<BatchI> = {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, },
    name: { type: Sequelize.STRING, allowNull: false, },

};
export const Batch = db.define<CourseI, any>('batch', batchAttr)

//lecture
const lectureAttr: SequelizeAttributes<BatchI> = {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, },
    name: { type: Sequelize.STRING, allowNull: false, },

};
export const Lecture = db.define<CourseI, any>('lecture', lectureAttr)

///student
const studentAttr: SequelizeAttributes<BatchI> = {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, },
    name: { type: Sequelize.STRING, allowNull: false, },

};
export const Student = db.define<CourseI, any>('student', studentAttr)

/// subject

const subjectAttr: SequelizeAttributes<BatchI> = {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, },
    name: { type: Sequelize.STRING, allowNull: false, },

};
export const Subject = db.define<CourseI, any>('subject', subjectAttr)


///Teacher
const teacherAttr: SequelizeAttributes<BatchI> = {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, },
    name: { type: Sequelize.STRING, allowNull: false, },

};
export const Teacher = db.define<CourseI, any>('teacher', teacherAttr)


// mapping 

Course.hasMany(Subject);
Subject.belongsTo(Course);

Course.hasMany(Batch);
Batch.belongsTo(Course);

Batch.hasMany(Lecture);
Lecture.belongsTo(Batch);

Subject.hasMany(Teacher);
Teacher.belongsTo(Subject);

Lecture.belongsTo(Subject, { as: 'subject' });
Lecture.belongsTo(Teacher, { as: 'teacher' });

Student.belongsToMany(Batch, { through: 'student_batch', onDelete: 'cascade', hooks: true });
Batch.belongsToMany(Student, { through: 'student_batch', onDelete: 'cascade', hooks: true });


db.sync().then(() => console.log("database created"))
    .catch((err) => console.log("could not create database"));

export {db}