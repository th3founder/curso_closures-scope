/*  Hoisting: Eleva las declaraciones, esto pasa en el momento en que se compila nuestro código antes de ser interpretado por el navegador.

De esta forma podemos asignar nuestros valores o acceder a un valor que previamente no ha sido declarado dentro de esta estructura.*/

a = 2;
var a;

console.log(a)

//al momento de correr el navegador, var,let char siempre se mueven al inicio del programa
nameOfDog("kia")

function nameOfDog(name){
    console.log(name)
}

//al momento de correr, el hoisting carga primero la funcion y despues la ejecuta