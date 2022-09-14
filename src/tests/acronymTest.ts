import request from 'supertest';
import App from '@/app';
import * as acronymsDto from '@dtos/acronymsDto';
import { Acronym } from '@interfaces/acronyms.interface';
import acronymModel from '@models/acronyms.model';
import AcronymRoute from '@routes/acronyms.route';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Testing Acronyms', () => {
  describe('[GET] /acronym', () => {
    it('response statusCode 200 / findAll', () => {
      const findAcronym: Acronym[] = acronymModel;
      const acronymsRoute = new AcronymRoute();
      const app = new App([acronymsRoute]);

      return request(app.getServer())
        .get(`${acronymsRoute.path}`)
        .expect(200, { data: findAcronym.slice(0, 10), message: 'getAll' });
    });
  });

  describe('[POST] /acronym', () => {
    it('response statusCode 201 / created', async () => {
      const acronymData: acronymsDto.CreateAcronymDto = {
        acronym: '11111',
        definition: 'zcdasfdsf',
      };
      const acronymsRoute = new AcronymRoute();
      const app = new App([acronymsRoute]);

      return request(app.getServer()).post(`${acronymsRoute.path}`).send(acronymData).expect(201);
    });
  });

  describe('[PUT] /acronym/:id', () => {
    it('response statusCode 200 / updated', async () => {
      const id = '?';
      const acronymData: acronymsDto.CreateAcronymDto = {
        acronym: '?',
        definition: '? is ??.',
      };
      const acronymsRoute = new AcronymRoute();
      const app = new App([acronymsRoute]);

      return request(app.getServer()).put(`${acronymsRoute.path}/${id}`).send(acronymData).expect(200);
    });
  });

  describe('[DELETE] /acronym/:id', () => {
    it('response statusCode 200 / deleted', () => {
      const id = '?';
      const deleteAcronym: Acronym[] = acronymModel.filter(item => item.acronym !== id);
      const acronymsRoute = new AcronymRoute();
      const app = new App([acronymsRoute]);

      return request(app.getServer()).delete(`${acronymsRoute.path}/${id}`).expect(200, { data: deleteAcronym, message: 'deleted' });
    });
  });
});
