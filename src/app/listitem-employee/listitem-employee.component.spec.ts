import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListitemEmployeeComponent } from './listitem-employee.component';

describe('ListitemEmployeeComponent', () => {
  let component: ListitemEmployeeComponent;
  let fixture: ComponentFixture<ListitemEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListitemEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListitemEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
