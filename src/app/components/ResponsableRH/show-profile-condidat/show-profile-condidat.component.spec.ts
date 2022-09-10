import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProfileCondidatComponent } from './show-profile-condidat.component';

describe('ShowProfileCondidatComponent', () => {
  let component: ShowProfileCondidatComponent;
  let fixture: ComponentFixture<ShowProfileCondidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowProfileCondidatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowProfileCondidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
