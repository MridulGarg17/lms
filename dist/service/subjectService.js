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
const courseService_1 = require("./courseService");
function getSubject() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            enitity_1.Subject.findAll().then(result => {
                resolve(result);
            });
        });
    });
}
exports.getSubject = getSubject;
function getSubjectbyId(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            enitity_1.Subject.findById(id).then(result => {
                resolve(result);
            });
        });
    });
}
exports.getSubjectbyId = getSubjectbyId;
function addSubjects(newSubject, id) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            enitity_1.Subject.create({
                name: newSubject.name
            }).then((subject) => {
                courseService_1.getCoursesbyId(id).then((course) => {
                    course.addSubject(subject);
                    resolve(subject);
                });
            });
        });
    });
}
exports.addSubjects = addSubjects;
function getTeachers(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            enitity_1.Teacher.findAll({
                include: [{
                        model: enitity_1.Subject,
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
exports.getTeachers = getTeachers;
