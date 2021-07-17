import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteMoreDetailsComponent } from './quote-more-details.component';

describe('QuoteMoreDetailsComponent', () => {
  let component: QuoteMoreDetailsComponent;
  let fixture: ComponentFixture<QuoteMoreDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteMoreDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteMoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
