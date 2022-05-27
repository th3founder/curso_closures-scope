const fruits = () => {
    if (true){
        var fruit1 = "apple"
        let fruit2 = "banana"
        const fruit3 = "kiwi"
        
        console.log(fruit2) //Si imprime
        console.log(fruit3) //Si imprime
    }
    
    console.log(fruit1) /* puede acceder porque esta dentro del scope de funcion y es una variable tipo var */
    console.log(fruit2) /* solo se puede acceder dentro del bloque {} */
    console.log(fruit3)/* solo se puede acceder dentro del bloque {} */

}

fruits() /* arroja error  */