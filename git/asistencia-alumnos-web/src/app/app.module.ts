import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { HelloWorldComponent } from './component/hello-world/hello-world.component';
import { AlumnosComponent } from './component/alumnos/alumnos.component';
import { EdicionAlumnosComponent } from './component/alumnos/edicion-alumnos/edicion-alumnos.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    AlumnosComponent,
    EdicionAlumnosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
