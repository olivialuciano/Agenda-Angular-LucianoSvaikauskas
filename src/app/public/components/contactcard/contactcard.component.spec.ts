import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactcardComponent } from './contactcard.component';

describe('ContactcardComponent', () => {
  let component: ContactcardComponent;
  let fixture: ComponentFixture<ContactcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
