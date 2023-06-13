//req validation by zod

import { z } from 'zod';

//create userUserZodSchema start
const createUserUserZodSchema = z.object({
  body: z.object({
    role: z.string({
      required_error: 'Role is required',
    }),

    password: z.string({}).optional(),
  }),
});

export const UserValidation = {
  createUserUserZodSchema,
};

//   await createUserUserZodSchema.parseAsync(req)

//create userUserZodSchema end
