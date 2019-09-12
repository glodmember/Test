create database FINES

use FINES

drop table if exists dbo.Alumno, dbo.Usuario, dbo.Materia, dbo.Estado, dbo.Asistencia, dbo.Cursada, dbo.Contacto, dbo.TipoContacto

create table dbo.Alumno(
	Nombre varchar(30) not null,
	Apellido varchar(30) not null,
	DNI bigint not null, 
	Fechanac date not null,
	Matricula int not null primary key,
	IdEstado int not null, 
	IdContacto int not null,
);
ALTER TABLE dbo.Alumno ADD constraint fk_Alumno_Estado foreign key (IdEstado) references dbo.Estado(IdEstado);
ALTER TABLE dbo.Alumno ADD constraint fk_Alumno_Contacto foreign key (IdContacto) references dbo.Contacto(IdContacto);

create table dbo.Usuario(
	IdTipoU varchar(15) not null,
	Nombre varchar(30) not null,
	Apellido varchar(30) not null,
	DNI bigint not null, 
	Fechanac date not null,
	Legajo int not null,
	IdUsuario int not null primary key,
	Password varchar(20) not null,
	Usuario varchar(20) not null,
	IdEstado int not null,
	IdContacto int not null,
);
ALTER TABLE dbo.Usuario ADD constraint fk_Usuario_Estado foreign key (IdEstado) references dbo.Estado(IdEstado);
ALTER TABLE dbo.Usuario ADD constraint fk_Usuario_TipoUsuario foreign key (IdTipoU) references dbo.TipoUsuario(IdTipoU);
ALTER TABLE dbo.Usuario ADD constraint fk_Usuario_Contacto foreign key (IdContacto) references dbo.Contacto(IdContacto);

create table dbo.Materia(
	IdMateria int not null primary key,
	Descripcion varchar(20) not null,
);

create table dbo.Cursada(
	IdCursada int not null primary key,
	IdMateria int not null,
	IdAlumno int not null,
	IdDocente int not null,
	IdEstado int not null,
	Anio int not null,
	Cuatrimestre int not null,
);
ALTER TABLE dbo.Cursada ADD constraint fk_Cursada_Materia foreign key (IdMateria) references dbo.Materia(IdMateria);
ALTER TABLE dbo.Cursada ADD constraint fk_Alumno_Materia foreign key (IdAlumno) references dbo.Alumno(IdAlumno);
ALTER TABLE dbo.Cursada ADD constraint fk_Alumno_Docente foreign key (IdDocente) references dbo.Usuario(IdUsuario); --uso tabla Usuario 
																													--ya incluye al docente
ALTER TABLE dbo.Cursada ADD constraint fk_Cursada_Estado foreign key (IdEstado) references dbo.Estado(IdEstado);

create table dbo.Asistencia(
	IdAsistencia int not null primary key,
	IdCursada int not null,
	Fecha datetime not null,
	IsPresent bit,
);
ALTER TABLE dbo.Asistencia ADD constraint fk_Asistencia_Cursada foreign key (IdCursada) references dbo.Cursada(IdCursada);

create table dbo.Estado(
	IdEstado int not null primary key,
	IdDescripcion varchar(50) not null,
);

create table dbo.Contacto(
	IdContacto int not null primary key,
	IdTipoContacto int not null,
	Descripcion varchar(20),
);
ALTER TABLE dbo.Contacto ADD constraint fk_Contacto_TipoContacto foreign key (IdTipoContacto) references dbo.TipoContacto(IdTipoContacto);

create table dbo.TipoContacto(
	IdTipoContacto int not null primary key,
);

create table dbo.TipoUsuario(
	IdTipoU varchar(15) not null primary key,
);