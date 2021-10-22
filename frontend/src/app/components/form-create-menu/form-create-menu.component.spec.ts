import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreateMenuComponent } from './form-create-menu.component';

describe('FormCreateMenuComponent', () => {
  let component: FormCreateMenuComponent;
  let fixture: ComponentFixture<FormCreateMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCreateMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCreateMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
