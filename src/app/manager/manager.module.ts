import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { ManagerComponent } from './manager.component';
import { ManagerRoutingModule } from './manager-routing.module';

@NgModule({
  declarations: [ManagerHomeComponent, ManagerComponent],
  imports: [
    CommonModule,
    ManagerRoutingModule
  ]
})
export class ManagerModule { }
