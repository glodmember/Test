import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloWorldComponent } from './component/hello-world/hello-world.component';
import { AlumnosComponent } from './component/alumnos/alumnos.component';
import { EdicionAlumnosComponent } from './component/alumnos/edicion-alumnos/edicion-alumnos.component';

const routes: Routes = [
  { path: '', component: HelloWorldComponent },
  { path: 'alumnos', component: AlumnosComponent },
  { path: 'alumnos/edicion', component: EdicionAlumnosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
