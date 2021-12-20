import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecQuestionComponent } from './sec-question.component';

describe('SecQuestionComponent', () => {
  let component: SecQuestionComponent;
  let fixture: ComponentFixture<SecQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
