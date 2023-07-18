export class PlatziClass{
    constructor({
        name,
        videoID,
    }){
        this.name = name;
        this.videoID = videoID;
    }

    reproducir(){
        videoPlay(this.videoID);
    }
    pausar(){
        videoStop(this.videoID);
    }
}

function videoPlay(id){
    const urlSecreta = "https://platziultrasecreto.com/"+id;
    console.log("Se esta reproduciendo desde la url "+ urlSecreta);
}

function videoStop(id){
    const urlSecreta = "https://platziultrasecreto.com/"+id;
    console.log("Pausamos la url "+ urlSecreta);
}


const natalia = {
    name: "Natalia Gomez",
    age: 20,
    cursosAprobados: ["Curso definitivo de HTML y CSS", "Curso practico de HTML y CSS"],
    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso);
    },
};

// Hacer que Natalia apruebe otro curos 
// natalia.cursosAprobados.push("Curso de Responsive Design")

class Student{

    constructor(name,age,cursosAprobados){
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }
    aprobarCurso(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito);
    }
    
};

const juanita = new Student(
    "Juanita",
    22,
    ["Curso de introduccion Videojuegos", "Cracion de personajes"],
    );


    

