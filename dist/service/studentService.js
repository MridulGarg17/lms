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
function addStudent(name, batch) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            enitity_1.Student.create({ name: name }).then(student => {
                batch.addStudent(student);
                resolve(student);
            });
        });
    });
}
exports.addStudent = addStudent;
function getStudents() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            enitity_1.Student.findAll().then(result => {
                resolve(result);
            });
        });
    });
}
exports.getStudents = getStudents;
function getStudentbyId(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            enitity_1.Student.findById(id).then(result => {
                resolve(result);
            });
        });
    });
}
exports.getStudentbyId = getStudentbyId;
function getStudentBatches(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            enitity_1.Student.findAll({
                where: {
                    id: id
                },
                attributes: ['id', 'name'],
                include: [{
                        model: enitity_1.Batch,
                        attributes: ['id', 'name'],
                        through: { attributes: [] }
                    }]
            });
        });
    });
}
exports.getStudentBatches = getStudentBatches;
function addStudentToBatch(stu, batch) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield batch.addStudent(stu);
    });
}
exports.addStudentToBatch = addStudentToBatch;
function deleteUserById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            enitity_1.Student.destroy({
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
function updateStudent(id, name) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            enitity_1.Student.update({
                name: name
            }, {
                where: {
                    id: id
                }
            });
        });
    });
}
exports.updateStudent = updateStudent;
