const fruits = () =>{
    var fruit = "apple"
    console.log(fruit)
}

const anotherFunction = () =>{
    var x = 1;
    var x = 2;
    let y = 1; /* no puede haber no se pueden volver a reasignar dentro del ambito; */
    /*let y = 2; */
    console.log(x);
    console.log(y)
}

fruits();
//console.log(fruit) /* arroja error porque no puede acceder a variables locales */

anotherFunction();

/* Resume

var si puede reasingar un valor a la misma variable

let no lo permite

*/