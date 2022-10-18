import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CodeOfConductComponent } from './code-of-conduct/code-of-conduct.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
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
    path: 'who-we-are',
    component: WhoWeAreComponent
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
