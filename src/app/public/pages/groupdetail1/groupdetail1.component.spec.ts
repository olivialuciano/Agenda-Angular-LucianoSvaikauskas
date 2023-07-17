import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Groupdetail1Component } from './groupdetail1.component';

describe('Groupdetail1Component', () => {
  let component: Groupdetail1Component;
  let fixture: ComponentFixture<Groupdetail1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Groupdetail1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Groupdetail1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
