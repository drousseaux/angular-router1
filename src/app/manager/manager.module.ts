import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { MaterialModule } from '../material.module';
import { ManagerComponent } from './manager.component';
import { ManagerRoutingModule } from './manager-routing.module';
import { UserManagementComponent } from './user-management/user-management.component';
import { ReceiptLookupComponent } from './receipt-lookup/receipt-lookup.component';
import { AuthService } from '../auth/auth.service';
import { AuthGuardService } from '../auth/auth-guard.service';

@NgModule({
  declarations: [ManagerHomeComponent, ManagerComponent, UserManagementComponent, ReceiptLookupComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ManagerRoutingModule
  ],
  providers: [ AuthService, AuthGuardService ]
})
export class ManagerModule { }
