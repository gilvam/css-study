import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShroudedCardListComponent } from './shrouded-card-list.component';

describe('ShroudedCardListComponent', () => {
  let component: ShroudedCardListComponent;
  let fixture: ComponentFixture<ShroudedCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShroudedCardListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShroudedCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
