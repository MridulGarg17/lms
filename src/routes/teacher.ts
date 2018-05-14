import express, { Request, Response } from 'express';
import { addTeacher, getbatches, getTeacher, getTeacherbyId, deleteUserById, updateTeacher } from '../service/teacherservice';
import { TeacherI, SubjectI } from '../model/entityI';

const route: express.Router = express.Router();

route.get('/', (req: Request, res: Response) => {
    getTeacher().then((Subject: SubjectI[] | null) => {
        res.status(200).send(Subject);
    })

})

route.post('/', (req: Request, res: Response) => {
    let newSubject: SubjectI = {
        id: 0,
        name: req.body.name
    }
    addTeacher(newSubject, req.body.cid).then((subjects: SubjectI | null) => {
        res.status(200).send(subjects);
    })
});


route.get('/:id/batches', (req, res) => {

    getbatches(req.params.id).then((Teacher: TeacherI[] | null) => {
        res.status(200).send(Teacher);
    })
});


route.get('/:id', (req, res) => {

    getTeacherbyId(req.params.id).then((subject: SubjectI | null) => {
        res.status(200).send(subject);
    })
});



route.delete('/:id', (req: Request, res: Response) => {
    let id = req.params.id;
    try {
        deleteUserById(id).then((result: number | null) => {
            if (result === 0) throw Error('No teacher found for id ' + id);
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

    updateTeacher(id, name).then((result) => {
        console.log(result)
        if (result == 0)
            throw Error("Update failed No teacher found for id" + id);
        res.status(200).json(result);
    }).catch(err => {
        res.status(400);
    })

})

export default route;