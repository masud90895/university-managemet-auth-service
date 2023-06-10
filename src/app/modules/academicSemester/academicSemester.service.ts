//create academicSemester service by Academic Semester:

import ApiError from '../../../errors/ApiError';
import { paginationHelper } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { academicSemesterTitleCodeMapper } from './academicSemester.constant';
import { IAcademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemister.model';
import status from 'http-status';

const createAcademicSemester = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {
  // check title and code equal or not
  if (academicSemesterTitleCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(status.BAD_REQUEST, 'Invalid Semester Code');
  }

  const result = await AcademicSemester.create(payload);
  return result;
};

//create academicSemester service by pagination

const getAllAcademicSemester = async (
  pagination: IPaginationOptions
): Promise<IGenericResponse<IAcademicSemester[]>> => {
  const { limit, page, skip } =
    paginationHelper.calculatePagination(pagination);

  const result = await AcademicSemester.find().sort().skip(skip).limit(limit);

  const total = await AcademicSemester.countDocuments();

  return {
    meta: {
      page,
      limit,
      total: total,
    },
    data: result,
  };
};

export const AcademicSemesterService = {
  createAcademicSemester,
  getAllAcademicSemester,
};
