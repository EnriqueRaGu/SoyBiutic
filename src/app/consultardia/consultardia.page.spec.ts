import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultardiaPage } from './consultardia.page';

describe('ConsultardiaPage', () => {
  let component: ConsultardiaPage;
  let fixture: ComponentFixture<ConsultardiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultardiaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultardiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
