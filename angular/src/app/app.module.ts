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
import { ReloadComponent } from './components/reload/reload.component';
import { PartnersComponent } from './components/partners/partners.component';
import { FormComponent } from './components/form/form.component';
import { FooterComponent } from './components/footer/footer.component';
import { EventCardsComponent } from './components/event-cards/event-cards.component';
import { DigitalMediaComponent } from './components/digital-media/digital-media.component';
import { BePartOfItComponent } from './components/be-part-of-it/be-part-of-it.component';
import { BePartOfItTwoComponent } from './components/be-part-of-it-two/be-part-of-it-two.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';

@NgModule({
  declarations: [
    AppComponent,
    CodeOfConductComponent,
    HomeComponent,
    HeroComponent,
    MenuComponent,
    ReloadComponent,
    PartnersComponent,
    FormComponent,
    FooterComponent,
    EventCardsComponent,
    DigitalMediaComponent,
    BePartOfItComponent,
    BePartOfItTwoComponent,
    WhoWeAreComponent
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
