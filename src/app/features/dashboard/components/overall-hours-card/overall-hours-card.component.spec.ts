import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallHoursCardComponent } from './overall-hours-card.component';

describe('OverallHoursCardComponent', () => {
  let component: OverallHoursCardComponent;
  let fixture: ComponentFixture<OverallHoursCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverallHoursCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverallHoursCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
