"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const subjectService_1 = require("../service/subjectService");
const route = express_1.default.Router();
route.get('/', (req, res) => {
    subjectService_1.getSubject().then((Subject) => {
        res.status(200).send(Subject);
    });
});
route.post('/', (req, res) => {
    let newSubject = {
        id: 0,
        name: req.body.name
    };
    subjectService_1.addSubjects(newSubject, req.body.cid).then((subjects) => {
        res.status(200).send(subjects);
    });
});
route.get('/:id/teachers', (req, res) => {
    subjectService_1.getTeachers(req.params.id).then((Teacher) => {
        res.status(200).send(Teacher);
    });
});
route.get('/:id', (req, res) => {
    subjectService_1.getSubjectbyId(req.params.id).then((subject) => {
        res.status(200).send(subject);
    });
});
exports.default = route;
