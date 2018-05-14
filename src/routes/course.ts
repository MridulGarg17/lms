import express, { Request, Response } from 'express';
import { getCourses, getCoursesbyId, addCourses, getBatches, addBatch, getBatchById, deleteCourseById } from '../service/courseService';
import { CourseI, BatchI } from '../model/entityI';
 const route: express.Router = express.Router();

route.get('/', (req: Request, res: Response) => {
    getCourses().then((courses: CourseI[] | null) => {
        res.status(200).send(courses);
    })
    
})


route.get('/:id', (req, res) => {

    getCoursesbyId(req.params.id).then((courses: CourseI | null) => {
        res.status(200).send(courses);
    })
});

route.post('/', (req, res) => {
    let newCourse: CourseI = {
        id: 0,
        name: req.body.name
    }
    addCourses(newCourse).then((course: CourseI | null) => {
        res.status(200).send(course);
    })
});

route.get('/:id/batches', (req, res) => {

    getBatches(req.params.id).then((batch: BatchI[] | null) => {
        res.status(200).send(batch);
    })
});

route.post('/:id/batches', (req, res) => {
    let newBatch: BatchI = {
        id: 0,
        name: req.body.name
    }
    addBatch(req.params.id, newBatch).then((batch: BatchI | null) => {
        res.status(200).send(batch);
    })
});

route.get('/:id/batches/:bid', (req, res) => {

    getBatchById(req.params.id, req.params.bid).then((batch: BatchI | null) => {
        res.status(200).send(batch);
    })
});

route.delete('/:id', (req: Request, res: Response) => {
    let id = req.params.id;
    try {
        deleteCourseById(id).then((result: number | null) => {
            if (result === 0) throw Error('No Course found for id ' + id);
            res.status(200).json({
                success: true,
                id: result
            });
        }).catch(err => {
            res.status(400);
        })
    } catch (err) {
        res.status(400);
    }

})

export default route;