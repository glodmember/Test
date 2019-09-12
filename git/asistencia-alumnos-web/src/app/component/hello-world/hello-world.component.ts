import { Component, OnInit } from '@angular/core';
import { AlumnoService } from 'src/app/service/alumno.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  title = '';
  hello = 'hello world';

  constructor(private alumnoService: AlumnoService) {}

  ngOnInit(): void {
    this.title = 'asistencia-alumnos-web';
    this.getHello();
  }

  private getHello() {
    this.alumnoService.getHello()
      .subscribe(
        res => {
          this.hello = res;
        });
  }

}
