import { BatchI, CourseI, TeacherI, StudentI, SubjectI, LectureI } from '../model/entityI';

import { Course, Teacher, Subject, Student, Batch } from '../model/enitity';

import { getCoursesbyId } from './courseService';


export async function addStudent(name: string, batch: any): Promise<BatchI | StudentI | null> {

    return new Promise<StudentI | null>((resolve, reject) => {
        Student.create({ name: name }).then(student => {
            batch.addStudent(student);
            resolve(student);
        })
    })
}



export async function getStudents(): Promise<StudentI[] | null> {
    return new Promise<StudentI[] | null>((resolve, reject) => {
        Student.findAll().then(result => {
            resolve(result);
        })
    })
}


export async function getStudentbyId(id: number): Promise<StudentI | null> {
    return new Promise<StudentI | null>((resolve, reject) => {
        Student.findById(id).then(result => {
            resolve(result);
        })
    })
}



export async function getStudentBatches(id: number): Promise<StudentI | null> {
    return new Promise<StudentI | null>((resolve, reject) => {
        Student.findAll({
            where: {
                id: id
            },
            attributes: ['id', 'name'],
            include: [{
                model: Batch,
                attributes: ['id', 'name'],
                through: { attributes: [] }
            }]
        })
    })
}

export async function addStudentToBatch(stu: any, batch: any): Promise<BatchI | StudentI | null> {
    return await batch.addStudent(stu);
}



export async function deleteUserById(id: number): Promise<number | null> {
    return new Promise<number | null>((resolve, reject) => {
        Student.destroy({
            where: {
                id: id
            }
        }).then(result => {
            resolve(result);
        })
    })
}



export async function updateStudent(id: number, name: string): Promise<any | null> {
    return new Promise<any | null>((resolve, reject) => {
        Student.update({
            name: name
        },
            {
                where: {
                    id: id
                }
            })
    })
}
