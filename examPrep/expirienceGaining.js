function solve(arr){
    let neededExpirience = Number(arr.shift());
    let battle = Number(arr.shift());
    let numbers = arr.map(Number);
    let expirience = 0;
    let battleCount = 0;
    for(let i = 0; i < battle; i++){
        if(expirience >= neededExpirience){
            break;
        }
        if((i + 1) % 3 === 0){
            expirience += 0.15 *numbers[i];
        }
        if((i + 1) % 5 === 0){
            expirience -= 0.1 * numbers[i];
        }
        expirience += numbers[i];
        battleCount++;

    }
    let needed = neededExpirience - expirience;
    if(expirience >= neededExpirience){
        return `Player successfully collected his needed experience for ${battleCount} battles.`;
    }else{
        return `Player was not able to collect the needed experience, ${needed.toFixed(2)} more needed.`;
    }
}
console.log(solve([
    '500', '5',
    '50',  '100',
    '200', '100',
    '30'
  ]));
  console.log(solve([
    '500', '5',
    '50',  '100',
    '200', '100',
    '20'
  ]));
  console.log(solve([
    '400', '5',
    '50',  '100',
    '200', '100',
    '20'
  ]));