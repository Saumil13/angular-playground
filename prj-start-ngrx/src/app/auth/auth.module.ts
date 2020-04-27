import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthComponent } from './auth.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: '', component: AuthComponent }
];

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, FormsModule, SharedModule, RouterModule.forChild(routes)]
})

export class AuthModule {

}
