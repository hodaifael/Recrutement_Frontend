import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProfileAdminComponent } from './create-profile-admin.component';

describe('CreateProfileAdminComponent', () => {
  let component: CreateProfileAdminComponent;
  let fixture: ComponentFixture<CreateProfileAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProfileAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateProfileAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
