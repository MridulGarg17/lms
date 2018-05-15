import { BatchI, CourseI, TeacherI, StudentI, SubjectI, LectureI } from '../model/entityI';

import {Course,Batch} from '../model/enitity';


export async function getCourses(): Promise<CourseI[]|null> {
    return new Promise<CourseI[] | null>((resolve, reject) => {
        Course.findAll().then(result => {
            resolve(result);
        })
    })

    //await Course.findAll();
}


export async function getCoursesbyId(id:number): Promise<CourseI | null> {
    return new Promise<CourseI| null>((resolve, reject) => {
        Course.findById(id).then(result => {
            resolve(result);
        })
    })
}


export async function addCourses(newCourse: CourseI): Promise<CourseI | null> {
    return new Promise<CourseI | null>((resolve, reject) => {
        Course.create({

            name: newCourse.name

        }).then(result => {
            resolve(result);
        })
    })
}

export async function getBatches(id:number): Promise<BatchI[] | null> {
    return new Promise<CourseI[] | null>((resolve, reject) => {
        Batch.findAll({
            include: [{
                model: Course,
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

export async function getBatchById(id: number,bid:number): Promise<BatchI | null> {
    return new Promise<BatchI | null>((resolve, reject) => {
        Batch.findOne({
            where: {
                id: bid
            },
            include: [{
                model: Course,
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

export async function addBatch(batchId: number, newBatch: BatchI): Promise<BatchI | null> {
    return new Promise<BatchI | null>((resolve, reject) => {
        Batch.create({
            name: newBatch.name
        }).then((batch: BatchI) => {
            getCoursesbyId(batchId).then((course: any) => {
                course.addBatch(batch)
                resolve(batch)
            })
        })
    })

}


export async function deleteCourseById(id: number): Promise<number | null> {
    return new Promise<number | null>((resolve, reject) => {
        Course.destroy({
            where: {
                id: id
            }
        }).then(result => {
            resolve(result);
        })
    })
}



