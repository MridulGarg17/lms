"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const enitity_1 = require("../model/enitity");
function getCourses() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            enitity_1.Course.findAll().then(result => {
                resolve(result);
            });
        });
        //await Course.findAll();
    });
}
exports.getCourses = getCourses;
function getCoursesbyId(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            enitity_1.Course.findById(id).then(result => {
                resolve(result);
            });
        });
    });
}
exports.getCoursesbyId = getCoursesbyId;
function addCourses(newCourse) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            enitity_1.Course.create({
                name: newCourse.name
            }).then(result => {
                resolve(result);
            });
        });
    });
}
exports.addCourses = addCourses;
function getBatches(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            enitity_1.Batch.findAll({
                include: [{
                        model: enitity_1.Course,
                        where: {
                            id: id
                        },
                        attributes: ['id', 'name'],
                    }]
            }).then(result => {
                resolve(result);
            });
        });
    });
}
exports.getBatches = getBatches;
function getBatchById(id, bid) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            enitity_1.Batch.findOne({
                where: {
                    id: bid
                },
                include: [{
                        model: enitity_1.Course,
                        where: {
                            id: id
                        },
                        attributes: ['id', 'name'],
                    }]
            }).then(result => {
                resolve(result);
            });
        });
    });
}
exports.getBatchById = getBatchById;
function addBatch(batchId, newBatch) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            enitity_1.Batch.create({
                name: newBatch.name
            }).then((batch) => {
                getCoursesbyId(batchId).then((course) => {
                    course.addBatch(batch);
                    resolve(batch);
                });
            });
        });
    });
}
exports.addBatch = addBatch;
function deleteCourseById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            enitity_1.Course.destroy({
                where: {
                    id: id
                }
            }).then(result => {
                resolve(result);
            });
        });
    });
}
exports.deleteCourseById = deleteCourseById;
