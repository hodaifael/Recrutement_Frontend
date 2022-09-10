import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GereComptesComponent } from './gere-comptes.component';

describe('GereComptesComponent', () => {
  let component: GereComptesComponent;
  let fixture: ComponentFixture<GereComptesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GereComptesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GereComptesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
