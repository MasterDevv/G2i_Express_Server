import fs from 'fs';
import { Acronym } from '@interfaces/acronyms.interface';

const rawdata = fs.readFileSync('src/db/acronym.json');
const acronyms = JSON.parse(rawdata.toString());

const acronymModel: Acronym[] = acronyms.map((acronym: any) => ({
  acronym: Object.keys(acronym)[0],
  definition: acronym[Object.keys(acronym)[0]],
}));

export default acronymModel;
