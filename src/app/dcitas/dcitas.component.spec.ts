import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcitasComponent } from './dcitas.component';

describe('DcitasComponent', () => {
  let component: DcitasComponent;
  let fixture: ComponentFixture<DcitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DcitasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DcitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
