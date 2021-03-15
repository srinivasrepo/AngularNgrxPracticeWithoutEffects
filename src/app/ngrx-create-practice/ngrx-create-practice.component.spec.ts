import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxCreatePracticeComponent } from './ngrx-create-practice.component';

describe('NgrxCreatePracticeComponent', () => {
  let component: NgrxCreatePracticeComponent;
  let fixture: ComponentFixture<NgrxCreatePracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgrxCreatePracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxCreatePracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
