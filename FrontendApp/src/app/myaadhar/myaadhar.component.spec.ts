import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyaadharComponent } from './myaadhar.component';

describe('MyaadharComponent', () => {
  let component: MyaadharComponent;
  let fixture: ComponentFixture<MyaadharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyaadharComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyaadharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
