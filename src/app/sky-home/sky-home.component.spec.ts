import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyHomeComponent } from './sky-home.component';

describe('SkyHomeComponent', () => {
  let component: SkyHomeComponent;
  let fixture: ComponentFixture<SkyHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkyHomeComponent]
    });
    fixture = TestBed.createComponent(SkyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
