import { Router } from 'express';
import AcronymsController from '@/controllers/AcronymsController';
import { CreateAcronymDto } from '@dtos/acronyms.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@/middlewares/validationMiddleware';
import authMiddleware from '@/middlewares/authMiddleware';

class AcronymsRoute implements Routes {
  public path = '/acronym';
  public router = Router();
  public acronymsController = new AcronymsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.acronymsController.getAcronyms);
    this.router.post(`${this.path}`, validationMiddleware(CreateAcronymDto, 'body'), this.acronymsController.addAcoronym);
    this.router.put(
      `${this.path}/:id(\\d+)`,
      validationMiddleware(CreateAcronymDto, 'body', true),
      authMiddleware,
      this.acronymsController.updateAcronym,
    );
    this.router.delete(`${this.path}/:id(\\d+)`, authMiddleware, this.acronymsController.deleteAcronym);
  }
}

export default AcronymsRoute;
