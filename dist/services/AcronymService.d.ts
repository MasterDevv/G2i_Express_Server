import { CreateAcronymDto } from '../dtos/acronyms.dto';
import { Acronym } from '../interfaces/acronyms.interface';
declare class AcronymService {
    acronyms: Acronym[];
    getAcronyms(): Promise<Acronym[]>;
    addAcronym(acronymData: CreateAcronymDto): Promise<Acronym>;
    updateAcronym(acronymId: string, acronymData: CreateAcronymDto): Promise<Acronym>;
    deleteAcronym(acronymId: string): Promise<Acronym[]>;
}
export default AcronymService;
