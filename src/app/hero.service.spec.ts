import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientModule, HttpRequest } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HeroService } from './hero.service';

describe('HeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [HeroService]
    });
  });

  afterEach(inject([HttpTestingController], (backend: HttpTestingController) => {
    backend.verify();
  }));

  describe('Fetch heroes', () => {
    it('It should send a request for fetching heroes', async(
      inject([HeroService, HttpTestingController], (heroService: HeroService, backend: HttpTestingController) => {
        heroService.getHeroes().subscribe();

        backend.expectOne((request: HttpRequest<any>) => {
          return request.url === 'api/heroes' &&
            request.method === 'GET' &&
            request.responseType === 'json';
        }, 'Expected Get to api/heroes endpoint');
      })
    ));

    it('Success response', async(
      inject([HeroService, HttpTestingController], (heroService: HeroService, backend: HttpTestingController) => {
        heroService.getHeroes().subscribe((response) => {
          expect(response).toBeTruthy();
          expect(response.length).toBe(2);
        });

        backend.expectOne('api/heroes')
          .flush(
            [{id: 11, name: 'Iron Man'}, {id: 12, name: 'Captain America'}],
            { status: 200, statusText: 'Ok'}
          );
      })
    ));

    it('Error response', async(
      inject([HeroService, HttpTestingController], (heroService: HeroService, backend: HttpTestingController) => {
        heroService.getHeroes().subscribe((response) => {
          expect(response).toBeTruthy();
          expect(response.length).toBe(0);
        });

        backend.expectOne('api/heroes')
          .flush(null, { status: 400, statusText: 'Error' });
      })
    ));
  });

});
