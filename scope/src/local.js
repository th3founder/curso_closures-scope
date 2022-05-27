const helloWorld = () =>{
    const hello = 'Hello world';
    console.log(hello);
}

helloWorld();

var scope = "i am global"


const functionScope = () =>{
    var scope = "I am local" /* Solo vive dentro de la funcion */
    const func = () =>{
        return scope
    }
    console.log(func());
}

functionScope() /* nos arrojara I am local */
console.log(scope) /* nos arrojara i am global */