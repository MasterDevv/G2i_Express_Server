import { NextFunction, Response, Request } from 'express';
import { HttpException } from '@exceptions/HttpException';

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const Authorization = req.cookies['Authorization'] || (req.header('Authorization') ? true : false);
    if (Authorization) {
      next();
    } else {
      next(new HttpException(404, 'Authentication token missing'));
    }
  } catch (error) {
    next(new HttpException(401, 'Wrong authentication token'));
  }
};

export default authMiddleware;
