var hello = "Hello" /* Podemos acceder todo el tiempo a esta variable porque esta de manera global */

let world = "Hello world"

const founder = "th3founder"

/* console.log(hello) */

const anotherFunction = ()=>{
    console.log(hello)
    console.log(world)
    console.log(founder)
}




anotherFunction();


/* re asignar un valor a una variable es mala practica */

/* let y const no puede tener reasignaciones, lanza error */


//!!!!!!!MAlas practicas

const helloWorld = () =>{
    globalvar = "Im global"
}

helloWorld()
console.log(globalvar)


const otraFuncion = () =>{
    var localVar = globalvar = 'Soy Global'
}

otraFuncion()
console.log(globalvar)