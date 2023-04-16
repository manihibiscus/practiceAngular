/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AAAAAAComponent } from './AAAAAA.component';

describe('AAAAAAComponent', () => {
  let component: AAAAAAComponent;
  let fixture: ComponentFixture<AAAAAAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AAAAAAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AAAAAAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
