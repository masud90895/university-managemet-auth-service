//create academicSemester interface by Academic Semester:
//  1. title
//  2.year
//  3.code
// 4. startMonth
// 5. endMonth

import { Model } from 'mongoose';

//=>  Sample Data:
// Autumn | Summer | Fall
// 2023
// 01 | 02 | 03
// January
// May

export type AcademicSemester = {
  title: string;
  year: number;
  code: string;
  startMonth: string;
  endMonth: string;
};

export type AcademicSemesterModel = Model<AcademicSemester>;
