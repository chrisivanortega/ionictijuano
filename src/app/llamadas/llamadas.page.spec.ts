import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LlamadasPage } from './llamadas.page';

describe('LlamadasPage', () => {
  let component: LlamadasPage;
  let fixture: ComponentFixture<LlamadasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LlamadasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LlamadasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
