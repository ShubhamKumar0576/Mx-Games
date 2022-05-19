import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAquisitionComponent } from './user-aquisition/user-aquisition.component';

const routes: Routes = [
  {
    path: 'userAqui',
    component: UserAquisitionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
