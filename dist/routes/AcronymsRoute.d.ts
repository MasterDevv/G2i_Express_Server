import AcronymsController from '../controllers/AcronymsController';
import { Routes } from '../interfaces/routes.interface';
declare class AcronymsRoute implements Routes {
    path: string;
    router: import("express-serve-static-core").Router;
    acronymsController: AcronymsController;
    constructor();
    private initializeRoutes;
}
export default AcronymsRoute;
