"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const studentService_1 = require("../service/studentService");
const courseService_1 = require("../service/courseService");
const route = express_1.default.Router();
route.get('/', (req, res) => {
    studentService_1.getStudents().then((students) => {
        res.status(200).json(students);
    });
});
route.post('/', (req, res) => {
    let cid = req.body.cid;
    let bid = req.body.bid;
    let name = req.body.name;
    courseService_1.getBatchById(cid, bid).then((batch) => {
        studentService_1.addStudent(name, batch).then((student) => {
            res.status(200).json(student);
        });
    });
});
route.get('/:id', (req, res) => {
    let id = req.params.id;
    studentService_1.getStudentbyId(id).then((student) => {
        res.status(200).json(student);
    });
});
route.get("/:id/batches", (req, res) => {
    let id = req.params.id;
    studentService_1.getStudentBatches(id).then((student) => {
        res.status(200).json(student);
    });
});
route.post("/:id/courses/:cid/batches/:bid", (req, res) => {
    let id = req.params.id;
    let bid = req.params.bid;
    let cid = req.params.cid;
    courseService_1.getBatchById(cid, bid).then((batch) => {
        studentService_1.getStudentbyId(id).then((student) => {
            studentService_1.addStudentToBatch(student, batch).then((result) => {
                console.log(result);
                res.json(result);
            });
        });
    });
});
route.delete('/:id', (req, res) => {
    let id = req.params.id;
    try {
        studentService_1.deleteUserById(id).then((result) => {
            if (result === 0)
                throw Error('No Student found for id ' + id);
            res.status(200).json({
                success: true,
                id: result
            });
        }).catch(err => {
            res.status(400);
        });
    }
    catch (err) {
        res.status(400);
    }
});
route.put('/:id', (req, res) => {
    let id = req.params.id;
    let name = req.body.name;
    studentService_1.updateStudent(id, name).then((result) => {
        console.log(result);
        if (result == 0)
            throw Error("Update failed No Student found for id" + id);
        res.status(200).json(result);
    }).catch(err => {
        res.status(400);
    });
});
exports.default = route;
