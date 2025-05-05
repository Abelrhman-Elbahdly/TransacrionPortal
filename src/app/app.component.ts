import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BreadcrumbsComponent } from './navigation/breadcrumbs/breadcrumbs.component';
import { TagsComponent } from './navigation/tags/tags.component';
import { HeaderComponent } from './header/header.component';
import { TransactionsTableComponent } from './transaction-tables/transaction-tables.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BreadcrumbsComponent,
    TagsComponent,
    HeaderComponent,
    TransactionsTableComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'transaction-portal';
  @ViewChild(TransactionsTableComponent)
  transactionsTable!: TransactionsTableComponent;

  onFilterChange(filters: any) {
    if (this.transactionsTable) {
      this.transactionsTable.onApplyFilters(filters);
    }
  }
}
