import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogfoodPage } from './dogfood.page';

describe('DogfoodPage', () => {
  let component: DogfoodPage;
  let fixture: ComponentFixture<DogfoodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogfoodPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogfoodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
