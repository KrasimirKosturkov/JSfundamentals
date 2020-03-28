function solve(arr){
    let initialLoot = arr.shift().split('|');
    for(let command of arr){
        let cmd = command.split(' ').shift();
        if(cmd === 'Yohoho!'){
            break;
        }
        if(cmd === 'Loot'){
          let looted = command.split(' ');
          for(let i = 1; i < looted.length; i++){
              if(!initialLoot.includes(looted[i])){
                  initialLoot.unshift(looted[i]);
              }
          }
        }
        if(cmd === 'Drop'){
            let index = Number(command.split(' ')[1])
            if(0 <= index && index < initialLoot.length){
                let removed = initialLoot.splice(index, 1);
                initialLoot.push(removed[0]);
            }
        }
        if(cmd === 'Steal'){
            let count = Number(command.split(' ')[1]);
            if(count > initialLoot.length){
                count = initialLoot.length;
            }
            let stolen = [];
            stolen = initialLoot.splice(-count);
            console.log(stolen.join(', '));
        }
    }
    if(initialLoot.length > 0){
        let sum = 0;
        let average = 0;
        for(let i = 0; i < initialLoot.length; i++){
            sum += initialLoot[i].length;
            average = sum / initialLoot.length; 
        }
        return `Average treasure gain: ${average.toFixed(2)} pirate credits.`;
    }else{
        return 'Failed treasure hunt.';
    }   
}
console.log(solve([
    'Gold|Silver|Bronze|Medallion|Cup',
    'Loot Wood Gold Coins',
    'Loot Silver Pistol',
    'Drop 3',
    'Steal 3',
    'Yohoho!'
  ]));
  console.log(solve([
    'Diamonds|Silver|Shotgun|Gold',
    'Loot Silver Medals Coal',
    'Drop -1',
    'Drop 1',
    'Steal 6',
    'Yohoho!'
  ]));