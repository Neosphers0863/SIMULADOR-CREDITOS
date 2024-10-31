function Persona(nombre, edad, estatura, color){
    this.nommre = nombre
    this.edad = edad
    this.estatura = estatura
    this.color = color

    this.moverse = function(nombre){
        console.log(this.nombre = nombre + "Se movió ...");
    }

    this.expresarse = function expresarse() {
        console.log("Se expresó ...");
    }

}

let personaUno = new Persona("Estiven", 29, 1.75, "Blanco")
let personaDos = new Persona("Daniel", 33, 1.77, "Blanco")
let personaTres = new Persona("Andres", 30, 1.855, "Blanco")

personaUno.moverse()
personaDos.moverse()
personaTres.moverse()

console.log(personaUno, personaDos, personaTres);