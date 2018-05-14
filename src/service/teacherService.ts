import { BatchI, CourseI, TeacherI, StudentI, SubjectI, LectureI } from '../model/entityI';

import { Course, Teacher, Subject,Batch } from '../model/enitity';

import { getSubjectbyId } from './subjectService';



export async function getTeacher(): Promise<TeacherI[] | null> {
    return new Promise<TeacherI[] | null>((resolve, reject) => {
        Teacher.findAll().then(result => {
            resolve(result);
        })
    })
}


export async function getTeacherbyId(id:number): Promise<TeacherI | null> {
    return new Promise<TeacherI | null>((resolve, reject) => {
        Teacher.findById(id).then(result => {
            resolve(result);
        })
    })
}


export async function addTeacher(newTeacher: TeacherI, id: number): Promise<StudentI | null> {
    return new Promise<TeacherI | null>((resolve,reject) => {
        Teacher.create({
            name:newTeacher.name
        }).then((teacher: TeacherI) => {
            getSubjectbyId(id).then((subject:any) => {
                subject.addTeacher(teacher)
                resolve(subject)
            })
        })
    })
} 

export async function getbatches(id: number): Promise<BatchI[] | null> {
    return new Promise<BatchI[] | null>((resolve, reject) => {
        Batch.findAll({
            include: [{
                model: Teacher,
                where: {
                    id: id
                },
                attributes: ['id', 'name'],
            }]
        }).then(result => {
            resolve(result);
        })
    })

}


export async function deleteUserById(id: number): Promise<number | null> {
    return new Promise<number | null>((resolve, reject) => {
        Teacher.destroy({
            where: {
                id: id
            }
        }).then(result => {
            resolve(result);
        })
    })
}


export async function updateTeacher(id: number, name: string): Promise<any | null> {
    return new Promise<any | null>((resolve, reject) => {
        Teacher.update({
            name: name
        },
            {
                where: {
                    id: id
                }
            })
    })
}
