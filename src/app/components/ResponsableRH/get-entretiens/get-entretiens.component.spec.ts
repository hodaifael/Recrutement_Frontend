import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEntretiensComponent } from './get-entretiens.component';

describe('GetEntretiensComponent', () => {
  let component: GetEntretiensComponent;
  let fixture: ComponentFixture<GetEntretiensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetEntretiensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetEntretiensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
