import { BatchI, CourseI } from '../model/entityI';
export declare function getCourses(): Promise<CourseI[] | null>;
export declare function getCoursesbyId(id: number): Promise<CourseI | null>;
export declare function addCourses(newCourse: CourseI): Promise<CourseI | null>;
export declare function getBatches(id: number): Promise<BatchI[] | null>;
export declare function getBatchById(id: number, bid: number): Promise<BatchI | null>;
export declare function addBatch(batchId: number, newBatch: BatchI): Promise<BatchI | null>;
export declare function deleteCourseById(id: number): Promise<number | null>;
