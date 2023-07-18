function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    // this.aprobarCurso = function (nuevoCursito) {
    //   this.cursosAprobados.push(nuevoCursito);
    // }
  }
  Student.prototype.aprobarCurso = function (nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
  }
  
  const juanita = new Student(
    "Juanita Alejandra",
    15,
    [
      "Curso de Introducción a la Producción de Videojuegos",
      "Curso de Creación de Personajes",
    ],
  );
  
  class Student{

    constructor({name,
        age,
        twiiter,
        istagram,
        facebook,
        cursosAprobados = [],
        email,
    }){
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
        this.email = email;
    }
    aprobarCurso(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito);
    }
    
};

class FreeStudent extends Student{
  constructor(props){
    super(props);
  }
  approvedCourse(newCourse){
    if (newCourse.lang !== "english") {
      this.approvedCourse.push(newCourse)
    }else{
      console.log("Lo sentimos, "+ this.name + ", Solo puedes tomar cursos en ingles");
    }
  }
}

class BasicStudent extends Student{
  constructor(props){
    super(props);
  }
}

class ExpertStudent extends Student{
  constructor(props){
    super(props);
  }

  approvedCourse(newCourse){
      this.approvedCourse.push(newCourse)
    
  }
}




const miguelito = new Student({
    email: "miguelito@mail.com",
    name: "Miguel",
    age: 28,

});