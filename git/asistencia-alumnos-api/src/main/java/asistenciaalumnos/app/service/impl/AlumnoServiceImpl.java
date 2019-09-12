package asistenciaalumnos.app.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpStatusCodeException;

import asistenciaalumnos.app.model.Alumno;
import asistenciaalumnos.app.repository.AlumnoRepository;
import asistenciaalumnos.app.service.AlumnoService;

@Service
public class AlumnoServiceImpl implements AlumnoService
{
    @Autowired
    AlumnoRepository alumnoRepository;

    @Override
    public String getHello() throws Exception
    {
        String message = "Hello World from API REST Spring Boot!!";
        return message;
    }

    @Override
    public List<Alumno> getAlumnos() throws Exception
    {
        List<Alumno> alumnos = alumnoRepository.findAll();
        return alumnos;
    }

    @Override
    public Alumno altaAlumno(Alumno alumno) throws Exception 
    {
        Alumno alumnoResponse = alumnoRepository.saveAndFlush(alumno);
        return alumnoResponse;
    }

    @Override
    public Alumno modificacionAlumno(Alumno alumno) throws Exception 
    {
        boolean alumnoExist = alumnoRepository.existsById(alumno.getId());
        if (!alumnoExist)
        {
            return null;
        }
        Alumno alumnoResponse = alumnoRepository.saveAndFlush(alumno);
        return alumnoResponse;
    }

    @Override
    public void bajaAlumno(Long id) throws Exception 
    {
        alumnoRepository.deleteById(id);
    }
}