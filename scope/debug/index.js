var a = "Hello"

function hello(){
    let b = "hello world"
    const c = "Hello world!"

    if(true){
        let d = "Hello World!!"
        debugger
    }
}

hello()

const moneyBox2 = () =>{
    let saveCoins = 0;
    debugger

    const countCoins = (coins) =>{
        debugger
        saveCoins += coins;
        console.log(`Money Box $${saveCoins}`)
    }
    return countCoins
    
}

let myMoneyBox = moneyBox2()

myMoneyBox(4) //4
myMoneyBox(6) //10 
myMoneyBox(10) //20