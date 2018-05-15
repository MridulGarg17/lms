import { BatchI, CourseI, TeacherI, StudentI, SubjectI, LectureI } from '../model/entityI';

import { Course, Teacher, Subject } from '../model/enitity';

import { getCoursesbyId } from './courseService';


export async function getSubject(): Promise<SubjectI[] | null> {
    return new Promise<SubjectI[] | null>((resolve, reject) => {
        Subject.findAll({

            attributes: ['id', 'name'],
            include: [{
                model: Course,
                attributes: ['id', 'name']
            }],

        }).then(result => {
            resolve(result);
        })
    })
}


export async function getSubjectbyId(id: number): Promise<SubjectI | null> {
    return new Promise<SubjectI | null>((resolve, reject) => {
        Subject.findById(id).then(result => {
            resolve(result);
        })
    })
}


export async function addSubjects(newSubject:SubjectI,id:number): Promise<StudentI| null> {
    return new Promise<SubjectI | null>((resolve, reject) => {
        Subject.create({
            name:newSubject.name
        }).then((subject:SubjectI) => {
            getCoursesbyId(id).then((course: any) => {
                course.addSubject(subject)
                resolve(subject)
            })
        })
    })
} 


export async function getTeachers(id: number): Promise<TeacherI[] | null> {
    return new Promise<TeacherI[] | null>((resolve, reject) => {
        Teacher.findAll({
            include: [{
                model: Subject,
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
