import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreateRestauranteComponent } from './form-create-restaurante.component';

describe('FormCreateRestauranteComponent', () => {
  let component: FormCreateRestauranteComponent;
  let fixture: ComponentFixture<FormCreateRestauranteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCreateRestauranteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCreateRestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
