import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineaPage } from './linea.page';

describe('LineaPage', () => {
  let component: LineaPage;
  let fixture: ComponentFixture<LineaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
