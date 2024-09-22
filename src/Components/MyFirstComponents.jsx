
export const MyfirstComponents = () => {

  const name = "Diego Ruiz";
  
  const github_profile = "https://github.com/Diego8223";
  
  const student = {
       name: "Diana",
       last_name:"Arevalo",
       mobile: "3000000000",
       linkedin_profile:"https://www.linkedin.com/in/diego-andres-ruiz-rodriguez-09b26424a/"
  };

  console.log(student);

  return (
    <>
      <div>MyfirstComponents</div>
      <div className="container bg-info-subtle mt-2"> 
        <h1>Temas de React</h1>
        <ul>
          <li>Componentes</li>
          <li>Eventos</li>
          <li>Estados Hooks</li>
          <li>Props</li>
        </ul>
      </div>
      <div className= "container bg-warning-subtle py-2">
        <h1>Datos Del Docente </h1>
        <p>Nombre:<strong>{ name } </strong> </p>
        <p>Github: { github_profile } </p>
      </div>
      <div className= "container bg-success-subtle py-2">
        <h1>Datos Del Estudiante </h1>
        <p>Nombre:<strong>{ student.name } </strong> </p>
        <p>Apellido: { student.last_name } </p>
        <p>celular: { student.mobile} </p>
        <p>Linkedin: <a href="{ student.linkedin_profile }">{ student.linkedin_profile }</a></p>

      </div>
      <div className="container mt-2 pt-2">
        <h1>Objeto completo</h1>
        <pre>{JSON.stringify(student)} </pre>
      </div>
     </>
  )
}


