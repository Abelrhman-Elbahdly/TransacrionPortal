import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { NgClass } from '@angular/common';
import { TransactionsService } from '../services/transactions.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-transaction-tables',
  standalone: true,
  imports: [DatePipe, NgClass, NgFor],
  templateUrl: './transaction-tables.component.html',
  styleUrl: './transaction-tables.component.css',
})
export class TransactionsTableComponent implements OnInit {
  transactions: any[] = [];
  filteredTransactions: any[] = [];

  constructor(private transactionService: TransactionsService) {}

  ngOnInit() {
    this.transactionService.getTransactions().subscribe({
      next: (data) => {
        this.transactions = data;
        this.filteredTransactions = data;
      },
    });
  }

  onApplyFilters(filters: any) {
    if (!filters.merchant && !filters.condition && !filters.date) {
      this.filteredTransactions = this.transactions;
      return;
    }

    this.filteredTransactions = this.transactions.filter((transaction) => {
      if (filters.merchant && transaction.merchant !== filters.merchant) {
        return false;
      }

      if (filters.condition && transaction.status !== filters.condition) {
        return false;
      }

      if (filters.date) {
        const selectedDate = new Date(filters.date);
        const transactionDate = new Date(transaction.date);

        selectedDate.setHours(0, 0, 0, 0);
        transactionDate.setHours(0, 0, 0, 0);

        return selectedDate.getTime() === transactionDate.getTime();
      }

      return true;
    });
  }
}
