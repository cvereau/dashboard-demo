import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoursPerProjectCardComponent } from './hours-per-project-card.component';

describe('HoursPerProjectCardComponent', () => {
  let component: HoursPerProjectCardComponent;
  let fixture: ComponentFixture<HoursPerProjectCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoursPerProjectCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoursPerProjectCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
