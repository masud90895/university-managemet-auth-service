// create academic semester model

import { Schema } from 'mongoose';
import { AcademicSemester } from './academicSemester.interface';

const academicSemesterSchema = new Schema<AcademicSemester>(
  {
    title: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    startMonth: {
      type: String,
      required: true,
    },
    endMonth: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default academicSemesterSchema;
