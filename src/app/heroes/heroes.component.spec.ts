import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { APP_BASE_HREF } from '@angular/common';

import { AppRoutingModule } from './../app-routing.module';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';

import { HeroService } from './../hero.service';

import { DashboardComponent } from './../dashboard/dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './../hero-detail/hero-detail.component';
import { HeroSearchComponent } from './../hero-search/hero-search.component';


describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async(() => {
    const heroService = jasmine.createSpyObj('HeroService', ['getHeroes']);

    heroService.getHeroes.and.returnValue(of([]));

    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        HeroesComponent,
        HeroDetailComponent,
        HeroSearchComponent
      ],
      imports: [ AppRoutingModule, FormsModule ],
      providers: [
        { provide: HeroService, useValue: heroService },
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
