import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyCompteComponent } from './verify-compte.component';

describe('VerifyCompteComponent', () => {
  let component: VerifyCompteComponent;
  let fixture: ComponentFixture<VerifyCompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyCompteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifyCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
