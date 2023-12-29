import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToppnavComponent } from './toppnav.component';

describe('ToppnavComponent', () => {
  let component: ToppnavComponent;
  let fixture: ComponentFixture<ToppnavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToppnavComponent]
    });
    fixture = TestBed.createComponent(ToppnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
