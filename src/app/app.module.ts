import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CitiesComponent } from './cities/cities.component';
import { DropdownComponent } from './dropDown/app.dropdown';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';

@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng4LoadingSpinnerModule.forRoot(),
    LoadingModule.forRoot({
      animationType: ANIMATION_TYPES.wanderingCubes,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)', 
      backdropBorderRadius: '4px',
      primaryColour: '#ffffff', 
      secondaryColour: '#ffffff', 
      tertiaryColour: '#ffffff'
  }),
    RouterModule.forRoot([
      { path: '', redirectTo: 'cities', pathMatch: 'full' },
      { path: 'cities', component: CitiesComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
