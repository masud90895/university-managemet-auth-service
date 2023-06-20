//create academicSemester controller by Academic Semester:

import { NextFunction, Request, Response } from 'express';
import { AcademicSemesterService } from './academicSemester.service';
import catchAsync from '../../../shared/catchAsync';
import httpStatus from 'http-status';
import sendResponse from '../../../shared/sendResponce';
import { IAcademicSemester } from './academicSemester.interface';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/pagination';
import { academicSemesterFilterableFields } from './academicSemester.constant';

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
  async (req: Request, res: Response) => {
    const filter = pick(req.query, academicSemesterFilterableFields);

    const paginationOptions = pick(req.query, paginationFields);

    const result = await AcademicSemesterService.getAllAcademicSemester(
      filter,
      paginationOptions
    );

    sendResponse<IAcademicSemester[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Success get all academic semester',
      data: result.data,
      meta: result.meta,
    });
  }
);

// get academic semester controller by Academic Semester:
const getSingleAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await AcademicSemesterService.getSingleSemester(id);

    sendResponse<IAcademicSemester>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Success get single academic semester',
      data: result,
    });
  }
);

// update academic semester controller by Academic Semester:
const updateAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const updateData = req.body;
    const result = await AcademicSemesterService.updateSemester(id, updateData);

    sendResponse<IAcademicSemester>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Success update academic semester',
      data: result,
    });
  }
);

// delete academic semester controller by Academic Semester:
const deleteAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await AcademicSemesterService.deleteSemester(id);

    sendResponse<IAcademicSemester>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Success delete academic semester',
      data: result,
    });
  }
);

export const AcademicSemesterController = {
  createAcademicSemester,
  getAllAcademicSemester,
  getSingleAcademicSemester,
  updateAcademicSemester,
  deleteAcademicSemester,
};
