import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistLlamadasComponent } from './hist-llamadas.component';

describe('HistLlamadasComponent', () => {
  let component: HistLlamadasComponent;
  let fixture: ComponentFixture<HistLlamadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistLlamadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistLlamadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
