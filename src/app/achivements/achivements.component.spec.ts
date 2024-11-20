import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchivementsComponent } from './achivements.component';

describe('AchivementsComponent', () => {
  let component: AchivementsComponent;
  let fixture: ComponentFixture<AchivementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AchivementsComponent]
    });
    fixture = TestBed.createComponent(AchivementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
