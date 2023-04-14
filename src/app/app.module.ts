import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './shared/components/child/child.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { CameraComponent } from './shared/components/camera/camera.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ProductsComponent,
    CameraComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
