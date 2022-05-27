const moneyBox = (coins) =>{
    var saveCoins = 0;

    saveCoins += coins

    console.log(`Money Box $${saveCoins}`);

}

moneyBox(5);
moneyBox(10);

const moneyBox2 = () =>{
    let saveCoins = 0;

    const countCoins = (coins) =>{
        saveCoins += coins;
        console.log(`Money Box $${saveCoins}`)
    }
    return countCoins
    
}

let myMoneyBox = moneyBox2()

myMoneyBox(4) //4
myMoneyBox(6) //10 
myMoneyBox(10) //20