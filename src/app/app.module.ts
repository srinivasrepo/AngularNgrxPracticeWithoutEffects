import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ngrxPracticeReducer } from './state/ngrxPractice.reducer';
import { NgrxCreatePracticeComponent } from './ngrx-create-practice/ngrx-create-practice.component';
import { NgrxReadPracticeComponent } from './ngrx-read-practice/ngrx-read-practice.component';
import { AppMaterialModule } from './app.material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NgrxCreatePracticeComponent,
    NgrxReadPracticeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    StoreModule.forRoot({
      NgrxPracticeState1: ngrxPracticeReducer
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
