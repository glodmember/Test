import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AlumnoApi } from '../model/alumno-api';

@Injectable({
    providedIn: 'root',
  })
export class AlumnoService {

    URL = 'http://localhost:8080/';

    constructor(private http: HttpClient) {}

    public getHello(): Observable<string> {
        return this.http.get(this.URL, {responseType: 'text'});
    }

    public getAlumnos(): Observable<AlumnoApi[]> {
        return this.http.get<AlumnoApi[]>(this.URL + 'alumnos');
    }
}
