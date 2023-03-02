import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputsModule } from "@progress/kendo-angular-inputs";
import { BarcodesModule } from "@progress/kendo-angular-barcodes";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    InputsModule,
    BarcodesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
