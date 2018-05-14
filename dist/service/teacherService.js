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
const subjectService_1 = require("./subjectService");
function getTeacher() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            enitity_1.Teacher.findAll().then(result => {
                resolve(result);
            });
        });
    });
}
exports.getTeacher = getTeacher;
function getTeacherbyId(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            enitity_1.Teacher.findById(id).then(result => {
                resolve(result);
            });
        });
    });
}
exports.getTeacherbyId = getTeacherbyId;
function addTeacher(newTeacher, id) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            enitity_1.Teacher.create({
                name: newTeacher.name
            }).then((teacher) => {
                subjectService_1.getSubjectbyId(id).then((subject) => {
                    subject.addTeacher(teacher);
                    resolve(subject);
                });
            });
        });
    });
}
exports.addTeacher = addTeacher;
function getbatches(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            enitity_1.Batch.findAll({
                include: [{
                        model: enitity_1.Teacher,
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
exports.getbatches = getbatches;
function deleteUserById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            enitity_1.Teacher.destroy({
                where: {
                    id: id
                }
            }).then(result => {
                resolve(result);
            });
        });
    });
}
exports.deleteUserById = deleteUserById;
function updateTeacher(id, name) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            enitity_1.Teacher.update({
                name: name
            }, {
                where: {
                    id: id
                }
            });
        });
    });
}
exports.updateTeacher = updateTeacher;
