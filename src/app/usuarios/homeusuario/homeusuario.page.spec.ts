import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeusuarioPage } from './homeusuario.page';

describe('HomeusuarioPage', () => {
  let component: HomeusuarioPage;
  let fixture: ComponentFixture<HomeusuarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeusuarioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeusuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
