//create route

import express from 'express';
import { UserRoute } from '../modules/user/user.route';
import { AcademicSemesterRoute } from '../modules/academicSemester/academicSemester.route';
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.route';

const router = express.Router();

const modulesRoutes = [
  { path: '/users', route: UserRoute },
  { path: '/academic-semester', route: AcademicSemesterRoute },
  {
    path: '/academic-faculties',
    route: AcademicFacultyRoutes,
  },
];

modulesRoutes.forEach(route => {
  router.use(route.path, route.route);
});
export default router;
