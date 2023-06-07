//create academicSemester controller by Academic Semester:

import { NextFunction, Request, Response } from 'express';
import { AcademicSemesterService } from './academicSemester.service';

const createAcademicSemester = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { ...academicSemesterData } = req.body;
    const result = await AcademicSemesterService.createAcademicSemester(
      academicSemesterData
    );

    res.status(200).json({
      success: true,
      message: 'Success create academic semester',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const AcademicSemesterController = {
  createAcademicSemester,
};
