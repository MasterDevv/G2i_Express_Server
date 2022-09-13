import { NextFunction, Request, Response } from 'express';
import acronymService from '../services/AcronymService';
declare class AcronymsController {
    acronymService: acronymService;
    getAcronyms: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    addAcoronym: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateAcronym: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    deleteAcronym: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
export default AcronymsController;
