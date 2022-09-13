import { NextFunction, Response, Request } from 'express';
import { HttpException } from '@exceptions/HttpException';
// import userModel from '@models/users.model';

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const Authorization = req.cookies['Authorization'] || (req.header('Authorization') ? true : false);
    if (Authorization) {
      // const secretKey: string = SECRET_KEY;
      // const verificationResponse = (await verify(Authorization, secretKey)) as DataStoredInToken;
      // const userId = verificationResponse.id;
      // const findUser = userModel.find(user => user.id === userId);
      next();
    } else {
      next(new HttpException(404, 'Authentication token missing'));
    }
  } catch (error) {
    next(new HttpException(401, 'Wrong authentication token'));
  }
};

export default authMiddleware;
