function solve(arr){
    let deck = arr.shift().split(':');
    let newDeck = [];
    for(let command of arr){
        let [cmd, second, last] = command.split(' ');
        if(cmd === 'Ready'){
            break;
        }
        if(cmd === 'Add'){
            if(deck.includes(second)){
                newDeck.push(second);
            }else{
                console.log('Card not found.');
            }
        }
        if(cmd === 'Insert'){
            if(!deck.includes(second) || 0 < +last || +last > newDeck.length - 1){
                console.log('Error!');
            }else{
                newDeck.splice(+last, 0, second);
            }
        }
        if(cmd === 'Remove'){
            if(!newDeck.includes(second)){
                console.log('Card not found.');
            }else{
                newDeck.splice(newDeck.indexOf(second), 1);
            }
        }
        if(cmd === 'Swap'){
            let index1 = newDeck.indexOf(second);
            let index2 = newDeck.indexOf(last);
            newDeck.splice(index1, 1, last);
            newDeck.splice(index2, 1, second);
        }
        if(cmd === 'Shuffle' && second === 'deck'){
            newDeck.reverse();
        }
    }
    return newDeck.join(' ');
}
console.log(solve([
    'Innervate:Moonfire:Pounce:Claw:Wrath:Bite',
    'Add Moonfire',
    'Add Pounce',
    'Add Bite',
    'Add Wrath',
    'Insert Claw 0',
    'Swap Claw Moonfire',
    'Remove Bite',
    'Shuffle deck',
    'Ready'
  ]));
  console.log(solve([
    'Wrath:Pounce:Lifeweaver:Exodia:Aso:Pop',
    'Add Pop',
    'Add Exodia',
    'Add Aso',
    'Remove Wrath',
    'Add SineokBqlDrakon',
    'Shuffle deck',
    'Insert Pesho 0',
    'Ready'
  ]));
  console.log(solve([
    'Wrath:Pounce:Lifeweaver:Exodia:Aso:Pop',
    'Remove Pounce',
    'Add Pounce',
    'Remove Pounce',
    'Add Wrath',
    'Ready'
  ]));