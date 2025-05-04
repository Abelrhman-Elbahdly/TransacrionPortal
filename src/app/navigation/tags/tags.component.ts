import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [NgFor],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css',
})
export class TagsComponent {
  tags = [
    { category: 'basic-info', label: 'المعلومات الأساسية' },
    { category: 'transactions', label: 'المعاملات' },
    { category: 'policies', label: 'سياسات الصرف' },
    { category: 'vehicles', label: 'المركبات' },
  ];
  activeCategory = 'transactions';

  selectCategory(category: string): void {
    this.activeCategory = category;
  }
}
