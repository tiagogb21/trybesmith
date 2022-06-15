import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UserService from '../services/user.services';

import generateJWT from '../token';

class UsersController {
  constructor(private userService = new UserService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const users = await this.userService.getAll();
    return res.status(StatusCodes.OK).json(users);
  };

  public create = async (req: Request, res: Response) => {
    const user = req.body;
    const userCreated = await this.userService.create(user);
    const { password, ...userInfo } = userCreated;
    const token = generateJWT(JSON.stringify(userInfo));
    res.status(StatusCodes.CREATED).json({
      token,
    });
  };
}

export default UsersController;
