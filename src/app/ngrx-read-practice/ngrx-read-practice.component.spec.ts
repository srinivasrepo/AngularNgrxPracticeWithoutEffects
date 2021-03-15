import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxReadPracticeComponent } from './ngrx-read-practice.component';

describe('NgrxReadPracticeComponent', () => {
  let component: NgrxReadPracticeComponent;
  let fixture: ComponentFixture<NgrxReadPracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgrxReadPracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxReadPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
