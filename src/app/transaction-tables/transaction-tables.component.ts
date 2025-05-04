import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { NgClass } from '@angular/common';
import { TransactionService } from './transactions.service';
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

  constructor(private transactionService: TransactionService) {}

  ngOnInit() {
    this.transactionService.getTransactions().subscribe({
      next: (data) => {
        this.transactions = data;
      },
    });
  }
}
