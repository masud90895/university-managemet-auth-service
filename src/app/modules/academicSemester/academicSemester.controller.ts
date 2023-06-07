//create academicSemester controller by Academic Semester:

import { Request, Response } from 'express';
import { AcademicSemesterService } from './academicSemester.service';
import catchAsync from '../../../shared/catchAsync';
import httpStatus from 'http-status';
import sendResponse from '../../../shared/sendResponce';

const createAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    const { ...academicSemesterData } = req.body;
    const result = await AcademicSemesterService.createAcademicSemester(
      academicSemesterData
    );

    // res.status(200).json({
    //   success: true,
    //   message: 'Success create academic semester',
    //   data: result,
    // });
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Success create academic semester',
      data: result,
    });
  }
);

export const AcademicSemesterController = {
  createAcademicSemester,
};
