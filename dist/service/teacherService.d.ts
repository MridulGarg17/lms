import { BatchI, TeacherI, StudentI } from '../model/entityI';
export declare function getTeacher(): Promise<TeacherI[] | null>;
export declare function getTeacherbyId(id: number): Promise<TeacherI | null>;
export declare function addTeacher(newTeacher: TeacherI, id: number): Promise<StudentI | null>;
export declare function getbatches(id: number): Promise<BatchI[] | null>;
export declare function deleteUserById(id: number): Promise<number | null>;
export declare function updateTeacher(id: number, name: string): Promise<any | null>;
