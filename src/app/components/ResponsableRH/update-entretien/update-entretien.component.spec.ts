import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEntretienComponent } from './update-entretien.component';

describe('UpdateEntretienComponent', () => {
  let component: UpdateEntretienComponent;
  let fixture: ComponentFixture<UpdateEntretienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEntretienComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateEntretienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
