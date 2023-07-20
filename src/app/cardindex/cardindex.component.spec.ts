import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardindexComponent } from './cardindex.component';

describe('CardindexComponent', () => {
  let component: CardindexComponent;
  let fixture: ComponentFixture<CardindexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardindexComponent]
    });
    fixture = TestBed.createComponent(CardindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
