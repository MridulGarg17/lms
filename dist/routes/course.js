"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const courseService_1 = require("../service/courseService");
const route = express_1.default.Router();
route.get('/', (req, res) => {
    courseService_1.getCourses().then((courses) => {
        res.status(200).send(courses);
    });
});
route.get('/batches', (req, res) => {
    courseService_1.getfullBatches().then((batch) => {
        res.status(200).send(batch);
    });
});
route.get('/:id', (req, res) => {
    courseService_1.getCoursesbyId(req.params.id).then((courses) => {
        res.status(200).send(courses);
    });
});
route.post('/', (req, res) => {
    let newCourse = {
        id: 0,
        name: req.body.name
    };
    courseService_1.addCourses(newCourse).then((course) => {
        res.status(200).send(course);
    });
});
route.get('/:id/batches', (req, res) => {
    courseService_1.getBatches(req.params.id).then((batch) => {
        res.status(200).send(batch);
    });
});
route.post('/:id/batches', (req, res) => {
    let newBatch = {
        id: 0,
        name: req.body.name
    };
    courseService_1.addBatch(req.params.id, newBatch).then((batch) => {
        res.status(200).send(batch);
    });
});
route.get('/:id/batches/:bid', (req, res) => {
    courseService_1.getBatchById(req.params.id, req.params.bid).then((batch) => {
        res.status(200).send(batch);
    });
});
route.delete('/:id', (req, res) => {
    let id = req.params.id;
    try {
        courseService_1.deleteCourseById(id).then((result) => {
            if (result === 0)
                throw Error('No Course found for id ' + id);
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
exports.default = route;
