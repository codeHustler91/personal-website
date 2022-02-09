import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTutorial1Component } from './angular-tutorial1.component';

describe('AngularTutorial1Component', () => {
  let component: AngularTutorial1Component;
  let fixture: ComponentFixture<AngularTutorial1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularTutorial1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularTutorial1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
