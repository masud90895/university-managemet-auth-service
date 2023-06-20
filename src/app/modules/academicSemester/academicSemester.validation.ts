//create academicSemester validation by Academic Semester:

import { z } from 'zod';
import {
  academicSemesterCode,
  academicSemesterMonth,
  academicSemesterTitle,
} from './academicSemester.constant';

const createAcademicSemesterZodSchema = z.object({
  body: z.object({
    title: z.enum([...academicSemesterTitle] as [string, ...string[]], {
      required_error: 'Title is required',
    }),
    year: z.string(),
    code: z.enum([...academicSemesterCode] as [string, ...string[]], {
      required_error: 'Code is required',
    }),
    startMonth: z.enum([...academicSemesterMonth] as [string, ...string[]], {
      required_error: 'Start Month is required',
    }),
    endMonth: z.enum([...academicSemesterMonth] as [string, ...string[]], {
      required_error: 'End Month is required',
    }),
  }),
});

//update academicSemester validation by Academic Semester:
// const updateAcademicSemesterZodSchema = z.object({
//   body: z.object({
//     title: z.enum([...academicSemesterTitle] as [string  , ...string[]], {
//       required_error: 'Title is required',
//     }).optional(),
//     year: z.string().optional(),
//     code: z.enum([...academicSemesterCode] as [string, ...string[]], {
//       required_error: 'Code is required',
//     }).optional(),
//     startMonth: z.enum([...academicSemesterMonth] as [string, ...string[]], {
//       required_error: 'Start Month is required',
//     }).optional(),
//     endMonth: z.enum([...academicSemesterMonth] as [string, ...string[]], {
//       required_error: 'End Month is required',
//     }),
//   }).optional(),
// }).refine((data) =>(data.body.title && data.body.code) || (!data.body.title && !data.body.code) ,{
//   message: 'Title and Code must be present or absent at the same time',
// } )

const updateAcademicSemesterZodSchema = z
  .object({
    body: z
      .object({
        title: z
          .enum([...academicSemesterTitle] as [string, ...string[]], {
            required_error: 'Title is required',
          })
          .optional(),
        year: z.string().optional(),
        code: z
          .enum([...academicSemesterCode] as [string, ...string[]], {
            required_error: 'Code is required',
          })
          .optional(),
        startMonth: z
          .enum([...academicSemesterMonth] as [string, ...string[]], {
            required_error: 'Start Month is required',
          })
          .optional(),
        endMonth: z.enum([...academicSemesterMonth] as [string, ...string[]], {
          required_error: 'End Month is required',
        }),
      })
      .optional(),
  })
  .refine(
    data => {
      if (data.body) {
        return (
          (data.body.title && data.body.code) ||
          (!data.body.title && !data.body.code)
        );
      }
      return true; // If data.body is undefined, consider the refinement to be valid
    },
    {
      message: 'Title and Code must be present or absent at the same time',
    }
  );

export const AcademicSemesterValidation = {
  createAcademicSemesterZodSchema,
  updateAcademicSemesterZodSchema,
};
