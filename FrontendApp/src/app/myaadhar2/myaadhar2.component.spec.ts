import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAadhar2Component } from './myaadhar2.component';

describe('Myaadhar2Component', () => {
  let component: MyAadhar2Component;
  let fixture: ComponentFixture<MyAadhar2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAadhar2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAadhar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
