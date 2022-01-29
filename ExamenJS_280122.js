/**************************************************/
/*                  TECH ACADEMY                  */
/*                                                */
/*   Desarrollado por: Juan Carlos Guzmán Rojas   */
/**************************************************/

/************************************
            EJERCICIO 1
 ************************************/

var numero1 = 5;
var numero2 = 8;

if(numero1 < numero2) {
   console.log("numero1 no es mayor que numero2");
}
if(numero2 > 0) {
   console.log("numero2 es positivo");
}
if(numero1 < 0 || numero1 !== 0) {
   console.log("numero1 es negativo o distinto de cero");
}
if((numero1+1) < numero2) {
   console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}


/************************************
             EJERCICIO 2
 ************************************/

const calculateFactorial = (number) => {
   let valueFactorial = number;

   if(typeof number == 'number'){
      for (let i = (number-1); i > 0; i--){
         valueFactorial *= i;
      }

      return valueFactorial;
   } else {
      return "El parámetro no es numérico";
   }
}

console.log(calculateFactorial(5));


/************************************
            EJERCICIO 3
 ************************************/

const oddOrEvenNumber = (number) => {
   if(typeof number == 'number'){

      if(number % 2 === 0)
         return "El número es par."
      else
         return "El número es impar."

   } else {
      return "El parámetro no es numérico";
   }
}

console.log(oddOrEvenNumber(215));



/************************************
            EJERCICIO 4
 ************************************/

const stringPalindrome = "La ruta nos aporto otro paso natural";

const isPalindrome = (string) => {

   let stringReversed = "";
   let lengthString = 0;

   if(typeof string == 'string'){
      string = string.replace(/ /g, "").toLowerCase();
      lengthString = string.length;

      for (let i=(lengthString-1); i >= 0; i--){
         stringReversed += string[i];
      }

      if(string === stringReversed)
         return "La cadena si es un Palíndromo";
      else
         return "La cadena no es un Palíndromo"
   } else {
      return "El parámetro no es una cadena"
   }
}

console.log(isPalindrome(stringPalindrome));



/************************************
           EJERCICIO 5
 ************************************/

class Persona {

   nombre;
   edad;

   constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
   }

   obtDetalles() {
      console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
   }
}

class Estudiante extends Persona {

   calificacion;

   constructor(nombre, edad) {
      super(nombre, edad);
   }

   obtDetalles() {
      console.log("--- ESTUDIANTE ---")
      super.obtDetalles();
      console.log(`Calificación: ${this.calificacion}`);
   }
}

class Profesor extends Persona{

   asignatura;
   nivel;

   constructor(nombre, edad, asignatura = "JS", nivel = "Básico") {
      super(nombre, edad);
      this.asignatura = asignatura;
      this.nivel = nivel;
   }

   obtDetalles() {
      console.log("--- PROFESOR ---")
      super.obtDetalles();
      console.log(`Asignatura: ${this.asignatura}, Nivel: ${this.nivel}`);
      console.log("----------------------------")
   }
}

class Grupo {

   profesor;
   promedio;
   estudiantes;

   constructor(profesor, estudiantes) {
      this.profesor = profesor;
      this.estudiantes = estudiantes;
   }

   calificar() {
      this.estudiantes.map(estudiante => {
         estudiante.calificacion = (Math.random() * 10).toFixed(2);
      })
   }

   calcularPromedio(){
      let sumatoria = 0;

      this.estudiantes.map(estudiante => {
        sumatoria += parseFloat(estudiante.calificacion);
      });

      this.promedio = sumatoria / this.estudiantes.length;

      console.log(`Promedio del Grupo: ${this.promedio.toFixed(2)}`)
      console.log("")

   }

   obtDetalles(){
      this.profesor.obtDetalles();
      this.estudiantes.map(estudiante => {
         estudiante.obtDetalles();
         console.log("");
      });
   }
}
/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
const estudiantes = [];
const est1 = new Estudiante("Juan Carlos Guzmán", 24);
const est2 = new Estudiante("Jenny Rojas", 26);
const est3 = new Estudiante("Laura Macana", 23);
const est4 = new Estudiante("Gustavo Guzmán", 33);
const est5 = new Estudiante("Carlos Silva", 60);
const est6 = new Estudiante("Luzmila Rojas", 58);
estudiantes.push(est1, est2, est3, est4, est5, est6);

const profesor1 = new Profesor("Juan Rolland", 30);
const grupo1 = new Grupo(profesor1, estudiantes);
grupo1.calificar();
grupo1.obtDetalles();
grupo1.calcularPromedio();
/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
const estudiantes2 = []
const est7 = new Estudiante("Juan José Guzmán", 10);
const est8 = new Estudiante("Juan Felipe Rivera", 2);
const est9 = new Estudiante("Eliana Rodriguez", 32);
const est10 = new Estudiante("Gustavo Rojas", 33);
estudiantes2.push(est7, est8, est9, est10);

const profesor2 = new Profesor("James Gosling", 50, "React", "Intermedio");
const grupo2 = new Grupo(profesor2, estudiantes2);
grupo2.calificar();
grupo2.obtDetalles();
grupo2.calcularPromedio();
/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/



/************************************
               BONUS
 ************************************/

const getCombinations = (string) => {
   let combinations = "";

   if(typeof string == "string"){
      let stringSplit = string.toLowerCase().split("");
      let count = 0;
      let stringTemp = "";

      while (count < stringSplit.length){
         stringTemp = stringSplit[count];

         if(count === 0)
            combinations += stringTemp;
         else
            combinations += `, ${stringTemp}`;

         for(let i=0; i < stringSplit.length; i++){
            if(count === i){
               continue;
            } else {
               stringTemp += stringSplit[i];
               combinations += `, ${stringTemp}`;
            }
         }

         stringTemp = "";
         count++;
      }

      return combinations;
   } else {
      return "El parámetro no es una cadena."
   }
}

console.log(getCombinations("Casa"));