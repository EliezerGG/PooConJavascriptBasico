class Comment{
    constructor({
        content,
        studentName,
        studentRole ="estudiante",
    }){
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    }

    publicar(){
        console.log(`${this.studentName} (${this.studentRole})
        ${this.likes} likes,
        ${this.content}
        `);
    }
}















class Course{
    constructor({
        name,
        classes =[],
        isFree = false,
        lang = "spanish",
    }){
        this._name = name;
        this.courses = classes;
        this.isFree = isFree;
        this.lang = lang;
    }
    get name(){
        return this._name;
    }
    
    set name(nuevoNombre){
        if (nuevoNombre === "Curso malito de programacion Bascia") {
            console.error("Web.. no");
        }else{
            this._name = nuevoNombre;
        }
    }
}

const cursoProgBasica = new Course({
    name: "Curso gratis de programacion Bascia",
    isFree: true,
    
});

cursoProgBasica.name 

const cursoDefinitivoHtmlCss = new Course({
    name: "Curso Definitivo HTML y CSS",
    
});

const cursoPracticoHtml = new Course({
    name: "Curso practico HTML",
    lang: "english",
});






class LearnigPath{
    constructor({
        name,
        courses = [],
    }){
        this.name = name;
        this.courses = courses;
    }
}

const escuelaWeb = new LearnigPath({
    name: "Escuales de Desarrollo web",
    courses: [
        cursoProgBasica,
        cursoDefinitivoHtmlCss,
        cursoPracticoHtml, 
         "Curso Next Js"],
});

const escuelaData = new LearnigPath({
    name: "Escuela de Data Science ",
    courses: [
        cursoProgBasica,
        "Curso Python",
        "Curso matematicas",
        "Curso excel"],
});
const escuelaVgs = new LearnigPath({
    name: "Escuala de Videojuegos",
    courses: [
        cursoProgBasica,
        "Unreal Engine",
        "Programcion Videojuegos"],
});



class Student {
    constructor({
        name,
        email,
        usarname,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }){
        this.name = name
        this.email =email
        this.usarname =usarname
        this.socialMedia = {
            twitter,
            instagram,
            facebook
        }
        this.approvedCourses =approvedCourses 
        this.learningPaths =learningPaths 
    }

    publicarComentario(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,

        });
        comment.publicar();
    }
};



class FreeStudent extends Student{
    constructor(props){
        super(props);
    }
    approvedCourse(newCourse){
      if (newCourse.lang !== "english") {
        this.approvedCourses.push(newCourse)
    }else{
        console.log("Lo sentimos, "+ this.name + ", NO puedes tomar cursos en ingles");
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

class TeacherStudent extends Student{
    constructor(props){
        super(props);
    }
    
    approvedCourse(newCourse){
        this.approvedCourse.push(newCourse)
        
    }

    publicarComentario(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole:"Profesor"

        });
        comment.publicar();
    }

}










const juan2 = new FreeStudent({
    name: "Juand",
    usarname: "juanddc",
    email: "juanito@mail.com",
    twitter: "fjuandc",
});

const miguelito = new BasicStudent({
    name: "Miguelito",
    usarname: "miguelifeliz",
    email: "migue@mail.com",
    instagram: "miguel_feliz",
});
  

const freddy = new TeacherStudent({
    name: "Freddy Vega",
    usarname: "freddyve",
    email: "fred@mail.com",
    instagram: "freddier",
});
  