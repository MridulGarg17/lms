import express, { Request, Response } from 'express';
import { addTeacher, getbatches, getTeacher, getTeacherbyId, deleteUserById, updateTeacher } from '../service/teacherService';
import { TeacherI, SubjectI } from '../model/entityI';

const route: express.Router = express.Router();

route.get('/', (req: Request, res: Response) => {
    getTeacher().then((teacher: TeacherI[] | null) => {
        res.status(200).send(teacher);
    })

})

route.post('/', (req: Request, res: Response) => {
    let newTeacher: TeacherI = {
        id: 0,
        name: req.body.name
    }
    addTeacher(newTeacher, req.body.sid).then((teachers: TeacherI | null) => {
        res.status(200).send(teachers);
    })
});


route.get('/:id/batches', (req, res) => {

    getbatches(req.params.id).then((Teacher: TeacherI[] | null) => {
        res.status(200).send(Teacher);
    })
});


route.get('/:id', (req, res) => {

    getTeacherbyId(req.params.id).then((teacher: TeacherI | null) => {
        res.status(200).send(teacher);
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
        })  
    } catch (err) {
        res.status(400);
    }

})

route.put('/:id', (req: Request, res: Response) => {

    let id = req.params.id;
    let name = req.body.name;

    updateTeacher(id, name).then((result:any) => {
        console.log(result)
        if (result == 0)
            throw Error("Update failed No teacher found for id" + id);
        res.status(200).json(result);
    }).catch(err => {
        res.status(400);
    })

})

export default route;