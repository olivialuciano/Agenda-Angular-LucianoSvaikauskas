import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnasComponent } from './alumnas.component';

describe('AlumnasComponent', () => {
  let component: AlumnasComponent;
  let fixture: ComponentFixture<AlumnasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
