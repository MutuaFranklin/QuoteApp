import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesMainSectionComponent } from './quotes-main-section.component';

describe('QuotesMainSectionComponent', () => {
  let component: QuotesMainSectionComponent;
  let fixture: ComponentFixture<QuotesMainSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotesMainSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesMainSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
