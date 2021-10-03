import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmroomComponent } from './filmroom.component';

describe('FilmroomComponent', () => {
  let component: FilmroomComponent;
  let fixture: ComponentFixture<FilmroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
