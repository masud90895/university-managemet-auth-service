//create academicSemester controller by Academic Semester:

import { NextFunction, Request, Response } from 'express';
import { AcademicSemesterService } from './academicSemester.service';
import catchAsync from '../../../shared/catchAsync';
import httpStatus from 'http-status';
import sendResponse from '../../../shared/sendResponce';
import { IAcademicSemester } from './academicSemester.interface';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/pagination';

const createAcademicSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body;
    const result = await AcademicSemesterService.createAcademicSemester(
      academicSemesterData
    );

    // res.status(200).json({
    //   success: true,
    //   message: 'Success create academic semester',
    //   data: result,
    // });
    sendResponse<IAcademicSemester>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Success create academic semester',
      data: result,
    });
    next();
  }
);

// get all academic semester and pagination

const getAllAcademicSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const paginationOptions = pick(req.query, paginationFields);

    const result = await AcademicSemesterService.getAllAcademicSemester(
      paginationOptions
    );

    sendResponse<IAcademicSemester[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Success get all academic semester',
      data: result.data,
      meta: result.meta,
    });
    next();
  }
);

export const AcademicSemesterController = {
  createAcademicSemester,
  getAllAcademicSemester,
};
