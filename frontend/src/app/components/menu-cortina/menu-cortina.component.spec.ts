import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCortinaComponent } from './menu-cortina.component';

describe('MenuCortinaComponent', () => {
  let component: MenuCortinaComponent;
  let fixture: ComponentFixture<MenuCortinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuCortinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCortinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
