import { Component, OnInit } from '@angular/core';
import { AlumnoService } from 'src/app/service/alumno.service';
import { AlumnoApi } from 'src/app/model/alumno-api';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  alumnos: AlumnoApi[] = new Array();

  constructor(private alumnoService: AlumnoService) { }

  ngOnInit() {
    this.getAlumnos();
  }

  public refresh() {
    console.log('refresh()');
    this.getAlumnos();
  }

  private getAlumnos() {
    this.alumnoService.getAlumnos()
      .subscribe(
        res => {
          this.alumnos = [];
          res.forEach(element => {
            const alumno: AlumnoApi = new AlumnoApi();
            alumno.id = element.id;
            alumno.nombre = element.nombre;
            alumno.email = element.email;
            alumno.dni = element.dni;
            alumno.matricula = element.matricula;
            this.alumnos.push(alumno);
          });
        });
  }

}
