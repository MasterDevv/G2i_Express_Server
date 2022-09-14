import { NextFunction, Response, Request } from 'express';
import { HttpException } from '@exceptions/HttpException';

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  console.log('req.header is ', req.header('authorization'));
  try {
    const Authorization = req.cookies['authorization'] || (req.header('authorization') ? true : false);
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
