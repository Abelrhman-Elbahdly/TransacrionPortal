import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TransactionsService } from '../../services/transactions.service';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  @Output() filterChange = new EventEmitter<any>();
  filterForm: FormGroup;

  showForm = false;

  merchants: string[] = [];
  conditions: string[] = [];
  dates: Date[] = [];

  constructor(
    private fb: FormBuilder,
    private transactionsService: TransactionsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.filterForm = this.fb.group({
      merchant: [''],
      condition: [''],
      date: [''],
    });
  }

  ngOnInit() {
    this.merchants = this.transactionsService.getMerchants();
    this.conditions = this.transactionsService.getStatuses();
    this.dates = this.transactionsService.getDates();

    this.clearFilters();
  }

  applyFilters() {
    const filters = this.filterForm.value;

    this.filterChange.emit(filters);

    const queryParams: any = {};

    if (filters.merchant) queryParams.merchant = filters.merchant;
    if (filters.condition) queryParams.condition = filters.condition;
    if (filters.date) queryParams.date = filters.date;

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: queryParams,
    });

    this.showForm = false;
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  clearFilters() {
    this.filterForm.reset();
    this.filterChange.emit({});

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {},
    });

    this.showForm = false;
  }
}
