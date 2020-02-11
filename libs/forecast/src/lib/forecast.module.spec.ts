import { async, TestBed } from '@angular/core/testing';
import { ForecastModule } from './forecast.module';

describe('ForecastModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ForecastModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ForecastModule).toBeDefined();
  });
});
