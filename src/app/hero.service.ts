import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './_models/hero';
import { HEROES } from './_models/mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('Hero Service: fetched heroes');
    return of(HEROES);
  }
}
