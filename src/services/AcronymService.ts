import { CreateAcronymDto } from '@dtos/acronyms.dto';
import { HttpException } from '@exceptions/HttpException';
import { Acronym } from '@interfaces/acronyms.interface';
import acronymModel from '@/models/acronymModel';
import { isEmpty } from '@utils/util';
import fs from 'fs';

class AcronymService {
  public acronyms = acronymModel;

  public async getAcronyms(params: any): Promise<Acronym[]> {
    const { from = 0, limit = 10, search = '' } = params;
    console.log('from , limit, search, is ', from, limit, search);
    const acronyms: Acronym[] = this.acronyms
      .filter(acronym => acronym.acronym.indexOf(search) !== -1 || acronym.definition.indexOf(search) !== -1)
      .slice(parseInt(from), parseInt(from) + parseInt(limit));
    return acronyms;
  }
  public async addAcronym(acronymData: CreateAcronymDto): Promise<Acronym[]> {
    if (isEmpty(acronymData)) throw new HttpException(400, 'acronymData is empty');
    const findAcronym: Acronym = this.acronyms.find(acronym => acronym.acronym === acronymData.acronym);
    if (findAcronym) throw new HttpException(409, `This acronym ${acronymData.acronym} already exists`);
    const addData: Acronym = { ...acronymData };
    this.acronyms = [...this.acronyms, addData];
    const acronymsData = [];
    this.acronyms.forEach((item: any) => {
      const newItem = {};
      newItem[item.acronym] = item.definition;
      acronymsData.push(newItem);
    });
    fs.writeFileSync('src/db/acronym.json', JSON.stringify(acronymsData));
    return acronymsData;
  }

  public async updateAcronym(acronymId: string, acronymData: CreateAcronymDto): Promise<Acronym[]> {
    if (isEmpty(acronymData)) throw new HttpException(400, 'acronymData is empty');
    console.log('id is ', acronymId.toString());
    const findAcronym: Acronym = this.acronyms.find(acronym => acronym.acronym === acronymId);
    if (!findAcronym) {
      throw new HttpException(409, `This acronym ${acronymData.acronym} does not exist`);
    }
    const updateData: Acronym = { ...acronymData };
    const acronymsData = [];
    this.acronyms.map((acronym: Acronym) => {
      if (acronym.acronym === acronymId) acronym = { ...acronym, definition: acronymData.definition };
      const newItem = {};
      newItem[acronym.acronym] = acronym.definition;
      acronymsData.push(newItem);
    });
    fs.writeFileSync('src/db/acronym.json', JSON.stringify(acronymsData));
    return acronymsData;
  }

  public async deleteAcronym(acronymId: string): Promise<Acronym[]> {
    if (isEmpty(acronymId)) throw new HttpException(400, 'acronymId is empty');
    const findAcronym: Acronym = this.acronyms.find(acronym => acronym.acronym === acronymId);
    if (!findAcronym) {
      throw new HttpException(409, `This acronym ${acronymId} does not exist`);
    }

    const acronymsData = this.acronyms.filter(acronym => acronym.acronym !== acronymId);
    const acronymsNewData = acronymsData.map((acronym: Acronym) => {
      const newItem = {};
      newItem[acronym.acronym] = acronym.definition;
      return newItem;
    });

    fs.writeFileSync('src/db/acronym.json', JSON.stringify(acronymsNewData));
    return acronymsData;
  }
}

export default AcronymService;
