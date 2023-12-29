import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './components/common/sidenav/sidenav.component';
import { ToppnavComponent } from './components/common/toppnav/toppnav.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/common/home/home.component';
import { AboutComponent } from './components/common/about/about.component';
import { ContactComponent } from './components/common/contact/contact.component';
import { HeighlightDirective } from './directives/heighlight.directive';
import { BetterHeighlight } from './directives/better-heighlight.directive';
import { SuperbHeighlight } from './directives/superb-heighlight.directive';
import { DirectivesComponent } from './components/directives/directives.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { CommonModule } from '@angular/common';
import { ToUppercasePipe } from './pipes/uppercase.pipe';
import { EvenNumsPipe } from './pipes/even-nums.pipe';

const appRoutes: Routes = [
    {path: '', pathMatch:'full', redirectTo: '/home'},
    {path: 'home',  component: HomeComponent,  children: [
      {path: 'directives', component: DirectivesComponent},
      {path: 'pipes', component: PipesComponent}
    ]},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: '**', redirectTo: '/home'},
]

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ToppnavComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HeighlightDirective,
    BetterHeighlight,
    SuperbHeighlight,
    DirectivesComponent,
    PipesComponent,
    ToUppercasePipe,
    EvenNumsPipe
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
