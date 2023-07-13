import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupdetailComponent } from './groupdetail.component';

describe('GroupdetailComponent', () => {
  let component: GroupdetailComponent;
  let fixture: ComponentFixture<GroupdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
