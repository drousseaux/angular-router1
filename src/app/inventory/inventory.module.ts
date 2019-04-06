import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './inventory.component';
import { InventoryHomeComponent } from './inventory-home/inventory-home.component';
import { ProductsComponent } from './products/products.component';
import { StockEntryComponent } from './stock-entry/stock-entry.component';
import { CategoriesComponent } from './categories/categories.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [InventoryHomeComponent, ProductsComponent, StockEntryComponent, CategoriesComponent, InventoryComponent],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    MaterialModule
  ]
})
export class InventoryModule { }
