package asistenciaalumnos.app.model;

import static javax.persistence.GenerationType.IDENTITY;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Alumnos")
public class Alumno
{
	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "id", unique = true, nullable = false)
	private Long id;

	@Column(name = "nombre", length = 30, nullable = false)
	private String nombre;

	@Column(name = "email", length = 30, nullable = false)
	private String email;

	@Column(name = "dni", nullable = false)
	private Integer dni;

	@Column(name = "matricula", nullable = false)
	private Integer matricula;
	
	// private Date fechaNac;

	// private Estado estado;

	// private Contacto;
	
	public Alumno()
	{
		super();
	}

	public Long getId()
	{
		return this.id;
	}

	public String getNombre()
	{
		return this.nombre;
	}

	public void setNombre(String nombre)
	{
		this.nombre = nombre;
	}

	public String getEmail()
	{
		return this.email;
	}

	public void setEmail(String email)
	{
		this.email = email;
	}

	public Integer getDni()
	{
		return this.dni;
	}

	public void setDni(Integer dni)
	{
		this.dni = dni;
	}

	public Integer getMatricula()
	{
		return this.matricula;
	}

	public void setMatricula(Integer matricula)
	{
		this.matricula = matricula;
	}
}