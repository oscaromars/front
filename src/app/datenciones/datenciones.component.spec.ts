import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatencionesComponent } from './datenciones.component';

describe('DatencionesComponent', () => {
  let component: DatencionesComponent;
  let fixture: ComponentFixture<DatencionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatencionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatencionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
