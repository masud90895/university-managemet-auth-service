//create academicSemester route by Academic Semester:
import express from 'express';
import { AcademicSemesterValidation } from './academicSemester.validation';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router(); // zod validation apply

router.post(
  '/create-academicSemester',
  validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema)
  //  AcademicSemesterController.createAcademicSemester
);
