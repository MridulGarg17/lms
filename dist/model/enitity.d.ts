/// <reference types="sequelize" />
import Sequelize from 'sequelize';
import { DataTypeAbstract, DefineAttributeColumnOptions } from 'sequelize';
import { CourseI } from './entityI';
declare global  {
    type SequelizeAttributes<T extends {
        [key: string]: any;
    }> = {
        [P in keyof T]: string | DataTypeAbstract | DefineAttributeColumnOptions;
    };
}
declare const db: Sequelize.Sequelize;
export declare const Course: Sequelize.Model<CourseI, any>;
export declare const Batch: Sequelize.Model<CourseI, any>;
export declare const Lecture: Sequelize.Model<CourseI, any>;
export declare const Student: Sequelize.Model<CourseI, any>;
export declare const Subject: Sequelize.Model<CourseI, any>;
export declare const Teacher: Sequelize.Model<CourseI, any>;
export { db };
