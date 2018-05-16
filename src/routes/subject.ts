import express, { Request, Response } from 'express';
import { getSubject, getTeachers, addSubjects, getSubjectbyId, deleteSubjectById } from '../service/subjectService';
import { TeacherI, SubjectI } from '../model/entityI';

const route: express.Router = express.Router();

route.get('/', (req: Request, res: Response) => {
    getSubject().then((Subject: SubjectI[] | null) => {
        res.status(200).send(Subject);
    })

})

route.post('/', (req: Request, res: Response) => {
    let newSubject: SubjectI = {
        id: 0,
        name: req.body.name
    }
    addSubjects(newSubject, req.body.cid).then((subjects: SubjectI | null) => {
        res.status(200).send(subjects);
    })
});

route.get('/:id', (req, res) => {

    getSubjectbyId(req.params.id).then((subject: SubjectI | null) => {
        res.status(200).send(subject);
    })
});

route.delete('/:id', (req: Request, res: Response) => {
    let id = req.params.id;
    console.log("delte is called");
    try {
        deleteSubjectById(id).then((result: number | null) => {
            if (result === 0) throw Error('No Teacher found for id ' + id);
            res.status(200).json({
                success: true,
                id: result
            });
        })
    } 

})


route.get('/:id/teachers', (req, res) => {

    getTeachers(req.params.id).then((Teacher: TeacherI[] | null) => {
        res.status(200).send(Teacher);
    })
});


export default route;