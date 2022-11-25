import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactdetailComponent } from './contactdetail.component';

describe('ContactdetailComponent', () => {
  let component: ContactdetailComponent;
  let fixture: ComponentFixture<ContactdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
