import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CodeOfConductComponent } from './code-of-conduct/code-of-conduct.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'full',
    redirectTo: ''
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'code-of-conduct',
    component: CodeOfConductComponent
  },
  {
    path: '*',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
