import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyentretienComponent } from './myentretien.component';

describe('MyentretienComponent', () => {
  let component: MyentretienComponent;
  let fixture: ComponentFixture<MyentretienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyentretienComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyentretienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
