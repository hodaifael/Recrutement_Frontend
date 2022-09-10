import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPostulationComponent } from './get-postulation.component';

describe('GetPostulationComponent', () => {
  let component: GetPostulationComponent;
  let fixture: ComponentFixture<GetPostulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetPostulationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetPostulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
