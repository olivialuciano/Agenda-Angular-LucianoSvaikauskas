import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewgroupComponent } from './newgroup.component';

describe('NewgroupComponent', () => {
  let component: NewgroupComponent;
  let fixture: ComponentFixture<NewgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewgroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
