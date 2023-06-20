import express from 'express';
import { USerController } from './user.controller';
import { UserValidation } from './user.validation';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();
// zod validation apply

router.post(
  '/create-user',
  validateRequest(UserValidation.createUserUserZodSchema),
  USerController.createUser
);

export const UserRoute = router;
