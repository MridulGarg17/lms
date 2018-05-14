import { BatchI, StudentI } from '../model/entityI';
export declare function addStudent(name: string, batch: any): Promise<BatchI | StudentI | null>;
export declare function getStudents(): Promise<StudentI[] | null>;
export declare function getStudentbyId(id: number): Promise<StudentI | null>;
export declare function getStudentBatches(id: number): Promise<StudentI | null>;
export declare function addStudentToBatch(stu: any, batch: any): Promise<BatchI | StudentI | null>;
export declare function deleteUserById(id: number): Promise<number | null>;
export declare function updateStudent(id: number, name: string): Promise<any | null>;
