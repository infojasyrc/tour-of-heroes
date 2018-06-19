import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { APP_BASE_HREF } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './../app-routing.module';
import { of } from 'rxjs';

import { HeroService } from './../hero.service';

import { DashboardComponent } from './../dashboard/dashboard.component';
import { HeroDetailComponent } from './../hero-detail/hero-detail.component';
import { HeroesComponent } from './../heroes/heroes.component';
import { HeroSearchComponent } from './../hero-search/hero-search.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

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
      imports: [
        FormsModule,
        AppRoutingModule
      ],
      providers: [
        { provide: HeroService, useValue: heroService },
        { provide: APP_BASE_HREF, useValue: '/dashboard' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
