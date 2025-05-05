import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface FilterConfig {
  merchants: string[];
  conditions: string[];
  dates: string[];
}

@Injectable({
  providedIn: 'root',
})
export class FilterConfigService {
  private mockConfig: FilterConfig = {
    merchants: ['مانيكس', 'دومتي', 'توتال'],
    conditions: ['نجحت', 'فشلت'],
    dates: ['اليوم', 'آخر 7 أيام', 'آخر 30 يوم', 'آخر 90 يوم', 'مخصص'],
  };

  getFilterConfig(): Observable<FilterConfig> {
    return of(this.mockConfig);
  }
}
