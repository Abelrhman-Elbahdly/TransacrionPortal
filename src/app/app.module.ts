import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { TransactionsTableComponent } from './transaction-tables/transaction-tables.component';

import localeAr from '@angular/common/locales/ar-EG';
@NgModule({
  declarations: [AppComponent, TransactionsTableComponent],
  imports: [BrowserModule, CommonModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
