import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ObsDemoComponent } from './obs-demo/obs-demo.component';
import { ObsCustomComponent } from './obs-custom/obs-custom.component';
import { ObsCustomOneComponent } from './obs-custom-one/obs-custom-one.component';
import { ObsCustomProductComponent } from './obs-custom-product/obs-custom-product.component';
import { ObsCustomTwoComponent } from './obs-custom-two/obs-custom-two.component';

@NgModule({
  declarations: [
    AppComponent,
    ObsDemoComponent,
    ObsCustomComponent,
    ObsCustomOneComponent,
    ObsCustomProductComponent,
    ObsCustomTwoComponent],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
