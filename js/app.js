var estudiantes = [];

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
    return estudiantes;
}

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado

    estudiante ={
      //nombre: prompt("Escribe el nombre de la Alumna"),
      nombre: MaysPrimera( prompt("Escribe el nombre de la Alumna").toLowerCase()),
      puntosTec: prompt("Escribe los puntos Técnicos"),
      puntosHSE: prompt("Escribe los puntos HSE")
    };

    estudiantes.push(estudiante);
    //console.log(estudiantes.length);
    console.log(estudiante.nombre,estudiante.puntosTec,estudiante.puntosHSE);

    return estudiante;
}

function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante

    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombre + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.puntosTec + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.puntosHSE + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes
    var res="";

    estudiantes.forEach(function(estudiante){

    res += mostrar(estudiante);
    });
    return res;

}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
    nombre = nombre.toLowerCase();
    var resp=[];


       resp = estudiantes.filter(function(estudiante){
       return estudiante.nombre.toLowerCase() == nombre;
     })


      return resp;



}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
    var estudiantesMax = estudiantes.sort(function(a,b){
      return b.puntosTec-a.puntosTec;
    });

    return estudiantesMax;


}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
    /* b -> a regresa la lista al reves :D  */
    var estudiantesMax = estudiantes.sort(function(a,b){
      return b.puntosHSE-a.puntosHSE;
    });

    return estudiantesMax;
}


function MaysPrimera(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}
