import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecundariaComponent } from './secundaria.component';

describe('SecundariaComponent', () => {
  let component: SecundariaComponent;
  let fixture: ComponentFixture<SecundariaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecundariaComponent]
    });
    fixture = TestBed.createComponent(SecundariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
