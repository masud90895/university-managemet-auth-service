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

//make a typescript type for month
export type IAcademicSemesterMonth =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export type IAcademicSemesterTitle = 'Autumn' | 'Summer' | 'Fall';
export type IAcademicSemesterCode = '01' | '02' | '03';

export type IAcademicSemester = {
  title: IAcademicSemesterTitle;
  year: number;
  code: IAcademicSemesterCode;
  startMonth: IAcademicSemesterMonth;
  endMonth: IAcademicSemesterMonth;
};

export type AcademicSemesterModel = Model<IAcademicSemester>;
