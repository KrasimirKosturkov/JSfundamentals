function solve(arr){
    let journeyCost = Number(arr.shift());
    let numberOfMonts = Number(arr.shift());
    let money = 0;
    for(let i = 1; i <= numberOfMonts; i++){
        if(i > 1 && i % 2 === 1){
            money -= 0.16 * money;
        }
        if(i % 4 === 0){
            money += money * 0.25;
        }
        money += 0.25 * journeyCost;
    }
    let moneyCost = money - journeyCost;
    if(moneyCost >= 0){
        return `Bravo! You can go to Disneyland and you will have ${moneyCost.toFixed(2)}lv. for souvenirs.`;
    }else{
        return `Sorry. You need ${Math.abs(moneyCost).toFixed(2)}lv. more.`;
    }
}
console.log(solve([ '3265', '3' ]));