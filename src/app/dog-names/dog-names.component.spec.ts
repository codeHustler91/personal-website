import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogNamesComponent } from './dog-names.component';

describe('DogNamesComponent', () => {
  let component: DogNamesComponent;
  let fixture: ComponentFixture<DogNamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogNamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
