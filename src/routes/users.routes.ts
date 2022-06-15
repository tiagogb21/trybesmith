import { Router } from 'express';

import UsersController from '../controllers/users.controller';

import {
  isValidUsername,
  isValidClasse,
  isValidLevel,
  isValidPassword,
} from '../middlewares/users.middleware';

const userRouter = Router();

const usersController = new UsersController();

userRouter.get('/users', usersController.getAll);

userRouter.post(
  '/users',
  isValidUsername,
  isValidClasse,
  isValidLevel,
  isValidPassword,
  usersController.create,
);

export default userRouter;
