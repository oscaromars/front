import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DclientesComponent } from './dclientes.component';

describe('DclientesComponent', () => {
  let component: DclientesComponent;
  let fixture: ComponentFixture<DclientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DclientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DclientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
