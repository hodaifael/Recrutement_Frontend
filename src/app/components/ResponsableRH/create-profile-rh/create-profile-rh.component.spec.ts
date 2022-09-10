import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProfileRHComponent } from './create-profile-rh.component';

describe('CreateProfileRHComponent', () => {
  let component: CreateProfileRHComponent;
  let fixture: ComponentFixture<CreateProfileRHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProfileRHComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateProfileRHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
