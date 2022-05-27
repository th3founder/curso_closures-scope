const buildCount = (i) => {
    let count = i;
    const displayCount = () =>  {
        console.log(count++)
        console.log("count",count)
    }
    return displayCount
}

/* El ambito lexico son las funciones que se ejecutan utilizando la cadena del alcance donde estaba vigene en su momento*/

const myCount = buildCount(1);

myCount() //1
myCount() //2
myCount() //3

const myOtherCount = buildCount(10)

myOtherCount() //11
myOtherCount() //12
myOtherCount() //13