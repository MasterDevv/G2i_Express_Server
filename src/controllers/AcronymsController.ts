import { NextFunction, Request, Response } from 'express';
import { CreateAcronymDto } from '@dtos/acronyms.dto';
import { Acronym } from '@interfaces/acronyms.interface';
import acronymService from '@/services/AcronymService';

class AcronymsController {
  public acronymService = new acronymService();

  public getAcronyms = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllAcronymsData: Acronym[] = await this.acronymService.getAcronyms(req.query);
      res.status(200).json({ data: findAllAcronymsData, message: 'getAll' });
    } catch (error) {
      next(error);
    }
  };
  public addAcoronym = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const addData: CreateAcronymDto = req.body;
      const addedAcronymData: Acronym[] = await this.acronymService.addAcronym(addData);
      res.status(201).json({ data: addedAcronymData, message: 'added' });
    } catch (error) {
      next(error);
    }
  };

  public updateAcronym = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const updateData: CreateAcronymDto = req.body;
      const acronymId = req.params.id.toString();
      const updatedAcronymData: Acronym[] = await this.acronymService.updateAcronym(acronymId, updateData);

      res.status(200).json({ data: updatedAcronymData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteAcronym = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const acronymId = req.params.id.toString();
      const deleteUserData: Acronym[] = await this.acronymService.deleteAcronym(acronymId);
      res.status(200).json({ data: deleteUserData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default AcronymsController;
