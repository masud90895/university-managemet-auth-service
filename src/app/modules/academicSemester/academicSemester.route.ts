//create academicSemester route by Academic Semester:
import express from 'express';
import { AcademicSemesterValidation } from './academicSemester.validation';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterController } from './academicSemester.controller';

const router = express.Router(); // zod validation apply

router.post(
  '/create-academicSemester',
  validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema),
  AcademicSemesterController.createAcademicSemester
);

router.get('/:id', AcademicSemesterController.getSingleAcademicSemester);
router.patch(
  '/:id',
  validateRequest(AcademicSemesterValidation.updateAcademicSemesterZodSchema),
  AcademicSemesterController.updateAcademicSemester
);

router.delete('/:id', AcademicSemesterController.deleteAcademicSemester);

router.get('/', AcademicSemesterController.getAllAcademicSemester);

export const AcademicSemesterRoute = router;
