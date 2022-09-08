import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { CodeOfConductComponent } from './code-of-conduct/code-of-conduct.component';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './components/hero/hero.component';
import { MenuComponent } from './@thinkam/pilot/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    CodeOfConductComponent,
    HomeComponent,
    HeroComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    RouterModule.forRoot([]),
    PoTemplatesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
