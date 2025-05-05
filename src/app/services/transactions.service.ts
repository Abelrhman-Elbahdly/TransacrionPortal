import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
export interface FilterOptions {
  merchants: string[];
  dates: Date[];
  statuses: string[];
}
@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  private fakeTransactaions = [
    {
      id: 'ca670989-f7f0-4930-8fdd-1b2260e2d003',
      branch: '2- مصر الجديدة',
      merchant: 'مانيكس',
      amount: 97,
      date: new Date(2024, 2, 28, 22, 3, 26),
      status: 'نجحت',
    },
    {
      id: 'ca670989-f7f0-4930-8fdd-1b2260e2d003',
      branch: 'القاهرة',
      merchant: 'دومتي',
      amount: 22121,
      date: new Date(2024, 2, 27, 21, 3, 26),
      status: 'فشلت',
    },
    {
      id: 'ca670989-f7f0-4930-8fdd-1b2260e2d003',
      branch: '2- مصر الجديدة',
      merchant: 'توتال',
      amount: 97,
      date: new Date(2024, 2, 25, 20, 3, 26),
      status: 'نجحت',
    },
    {
      id: 'ca670989-f7f0-4930-8fdd-1b2260e2d003',
      branch: 'القاهرة',
      merchant: 'دومتي',
      amount: 22121,
      date: new Date(2024, 2, 27, 15, 3, 26),
      status: 'نجحت',
    },
    {
      id: 'ca670989-f7f0-4930-8fdd-1b2260e2d003',
      branch: '2- مصر الجديدة',
      merchant: 'توتال',
      amount: 97,
      date: new Date(2024, 3, 1, 19, 3, 26),
      status: 'نجحت',
    },
    {
      id: 'ca670989-f7f0-4930-8fdd-1b2260e2d003',
      branch: 'القاهرة',
      merchant: 'دومتي',
      amount: 22121,
      date: new Date(2024, 2, 15, 18, 3, 26),
      status: 'نجحت',
    },
  ];
  getTransactions(): Observable<any[]> {
    return of(this.fakeTransactaions);
  }

  getMerchants(): string[] {
    return [...new Set(this.fakeTransactaions.map((t) => t.merchant))];
  }

  getDates(): Date[] {
    return [...new Set(this.fakeTransactaions.map((t) => t.date))];
  }

  getStatuses(): string[] {
    return [...new Set(this.fakeTransactaions.map((t) => t.status))];
  }
}
