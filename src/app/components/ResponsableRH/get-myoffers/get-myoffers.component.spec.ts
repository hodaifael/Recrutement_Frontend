import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMyoffersComponent } from './get-myoffers.component';

describe('GetMyoffersComponent', () => {
  let component: GetMyoffersComponent;
  let fixture: ComponentFixture<GetMyoffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetMyoffersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetMyoffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
