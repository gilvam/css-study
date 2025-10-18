import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HideLettersComponent } from './hide-letters.component';

describe('HideLettersComponent', () => {
  let component: HideLettersComponent;
  let fixture: ComponentFixture<HideLettersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HideLettersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HideLettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
