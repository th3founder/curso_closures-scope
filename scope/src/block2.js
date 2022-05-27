let x = 1;

{
    let x = 2;
    console.log(x) /* imprime 2 */

}

console.log(x) /*imprime 1  */


const anotherFunction = () =>{
    
    for(let i = 0; i<10; i++){
        setTimeout(()=>{
            console.log(i)
        },1000)
    }
}

anotherFunction()