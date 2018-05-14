import { TeacherI, StudentI, SubjectI } from '../model/entityI';
export declare function getSubject(): Promise<SubjectI[] | null>;
export declare function getSubjectbyId(id: number): Promise<SubjectI | null>;
export declare function addSubjects(newSubject: SubjectI, id: number): Promise<StudentI | null>;
export declare function getTeachers(id: number): Promise<TeacherI[] | null>;
