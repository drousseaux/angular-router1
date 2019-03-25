import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { ManagerComponent } from './manager.component';

import { Routes } from '@angular/router';

export const managerModuleRoutes: Routes = [
  { path: '', component: ManagerHomeComponent }
  ];

@NgModule({
  declarations: [ManagerHomeComponent, ManagerComponent],
  imports: [
    CommonModule
  ]
})
export class ManagerModule { }
