import { Component, Output, EventEmitter } from '@angular/core';
import { HeaderSummaryComponent } from './header-summary/header-summary.component';
import { FilterComponent } from './filter/filter.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderSummaryComponent, FilterComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Output() filterChange = new EventEmitter<any>();

  onFilterChange(filters: any) {
    this.filterChange.emit(filters);
  }
}
