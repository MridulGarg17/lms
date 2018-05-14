import express, { Request, Response } from 'express';
import { getSubject, getTeachers, addSubjects, getSubjectbyId } from '../service/subjectService';
import { TeacherI, SubjectI } from '../model/entityI';

const route: express.Router = express.Router();

route.get('/', (req: Request, res: Response) => {
    getSubject().then((Subject: SubjectI[] | null) => {
        res.status(200).send(Subject);
    })

})

route.post('/', (req:Request, res:Response) => {
    let newSubject: SubjectI ={
        id: 0,
        name: req.body.name
    }
    addSubjects(newSubject, req.body.cid).then((subjects:SubjectI | null) => {
        res.status(200).send(subjects);
    })
}); 


route.get('/:id/teachers', (req, res) => {

    getTeachers(req.params.id).then((Teacher: TeacherI[] | null) => {
        res.status(200).send(Teacher);
    })
});


route.get('/:id', (req, res) => {

    getSubjectbyId(req.params.id).then((subject: SubjectI | null) => {
        res.status(200).send(subject);
    })
});


export default route;