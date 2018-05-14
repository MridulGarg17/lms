import express, { Request, Response } from 'express';
import { addStudent, getStudents, getStudentbyId, getStudentBatches, addStudentToBatch, deleteUserById, updateStudent } from '../service/studentService';
import { TeacherI, SubjectI, StudentI, BatchI } from '../model/entityI';
import { getBatchById } from '../service/courseService'

const route: express.Router = express.Router();

route.get('/', (req: Request, res: Response) => {
    getStudents().then((students: StudentI[] | null) => {
        res.status(200).json(students);
    })
})

route.post('/', (req: Request, res: Response) => {
    let cid = req.body.cid;
    let bid = req.body.bid;
    let name = req.body.name;

    getBatchById(cid, bid).then((batch: BatchI | null) => {
        addStudent(name, batch).then((student: StudentI | null) => {
            res.status(200).json(student);
        })
    })

})


route.get('/:id', (req: Request, res: Response) => {
    let id = req.params.id;
    getStudentbyId(id).then((student: StudentI | null) => {
        res.status(200).json(student);
    })
})



route.get("/:id/batches", (req: Request, res: Response) => {
    let id = req.params.id;
    getStudentBatches(id).then((student: StudentI | null) => {
        res.status(200).json(student);
    })
})



route.post("/:id/courses/:cid/batches/:bid", (req: Request, res: Response) => {
    let id = req.params.id;
    let bid = req.params.bid;
    let cid = req.params.cid;

    getBatchById(cid, bid).then((batch: BatchI | null) => {
        getStudentbyId(id).then((student: StudentI | null) => {
            addStudentToBatch(student, batch).then((result: any) => {
                console.log(result)
                res.json(result);
            })
        })
    })

})

route.delete('/:id', (req: Request, res: Response) => {
    let id = req.params.id;
    try {
        deleteUserById(id).then((result: number | null) => {
            if (result === 0) throw Error('No Student found for id ' + id);
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

route.put('/:id', (req: Request, res: Response) => {

    let id = req.params.id;
    let name = req.body.name;

    updateStudent(id, name).then((result) => {
        console.log(result)
        if (result == 0)
            throw Error("Update failed No Student found for id" + id);
        res.status(200).json(result);
    }).catch(err => {
        res.status(400);
    })

})

export default route;