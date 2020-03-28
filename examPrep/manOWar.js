function solve(input){
    let pirateShip = input.shift().split('>').map(Number);
    let warship = input.shift().split('>').map(Number);
    let maximumHealthCapacity = Number(input.shift());
    let count = 0;
    for(let command of input){
        let [cmd, second, third, last] = command.split(' ');
        if(cmd === 'Retire'){
            break;
        }
        if(cmd === 'Fire'){
            if(0 <= +(second) && +(second) < warship.length){
                if(warship[+(second)] - +(third) > 0){
                    warship[+(second)] -= +(third);
                }else{
                    console.log('You won! The enemy ship has sunken.');
                    return;
                }                
            }
        }
        if(cmd === 'Defend'){
            if(0 <= +(second) 
            && +(second) < pirateShip.length 
            && 0 <= +(third) 
            && +(third) < pirateShip.length){
                for(let i = +(second); i <= +(third); i++){
                    if(pirateShip[i] - +(last) > 0 ){
                        pirateShip[i] -= +(last);
                    }else{
                        console.log('You lost! The pirate ship has sunken.');
                        return;
                    }
                   
                }
            }
        }
        if(cmd === 'Repair'){
            if(0 <= +(second) && +(second) < pirateShip.length && pirateShip[+(second)] > 0){
                if(pirateShip[+(second)] + +(third) > maximumHealthCapacity){
                    pirateShip[+(second)] = maximumHealthCapacity;
                }else{
                    pirateShip[+(second)] += +(third);
                }
            }
        }
        if(cmd === 'Status'){
            for(let i = 0; i < pirateShip.length; i++){
                if(pirateShip[i] < 0.2 * maximumHealthCapacity && pirateShip[i] > 0){
                    count++;
                }
            }
            console.log(`${count} sections need repair.`)
        }
    }
    let pirateShipReduced = pirateShip.reduce((a, b) => a + b);
    let warshipReduced = warship.reduce((a, b) => a + b);
    console.log(`Pirate ship status: ${pirateShipReduced}`)
    console.log(`Warship status: ${warshipReduced}`);
}
solve([
    '12>13>11>20>66',
    '12>22>33>44>55>32>18',
    '70',
    'Fire 2 11',
    'Fire 8 100',
    'Defend 3 6 11',
    'Defend 0 3 5',
    'Repair 1 33',
    'Status',
    'Retire'
  ]);
solve([
    '2>3>4>5>2',
    '6>7>8>9>10>11',
    '20',
    'Status',
    'Fire 2 3',
    'Defend 0 4 11',
    'Repair 3 18',
    'Retire'
  ]);