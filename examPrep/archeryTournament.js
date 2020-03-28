function solve(arr){
    let field = arr.shift().split('|').map(Number);
    let points = 0;
    for(let command of arr){
        let [splited, rest] = command.split(' ');
        if(splited === 'Game' && rest === 'over'){
            break;
        }
        if(splited === 'Shoot'){
           let [leftOrRight, index, length] = rest.split('@');

           if(0 > index || index > field.length - 1){
               continue;
           }
           if(leftOrRight === 'Left'){
               if(0 > (length - index) ||(length - index) > field.length){
                   length = field.length -1;
               }
               if(field[field.length -1 - index] >= 5){
                field[field.length -1 - index] -= 5;
                points += 5;
               }
               
           }
           if(leftOrRight === 'Right'){
               if(0 > (index - 1 - length) || (index - 1 - length) > field.length - 1){
                   length = 0;
               }
               if(field[index -1 - length] >= 5){
               field[index -1 - length] -= 5;
               points += 5;
               }
           }
        }
        if(splited === 'Reverse'){
            field.reverse();
        }
    }
    return field.join(' - ') + '\n' +`Iskren finished the archery tournament with ${points} points!`;
}
console.log(solve([
    '10|10|10|10|10',
    'Shoot Left@0@2',
    'Shoot Right@4@5',
    'Shoot Right@6@5',
    'Reverse',
    'Game over',
    ''
  ]));
  console.log(solve([
    '20|30|40|50|60',
    'Shoot Left@0@12',
    'Shoot Right@4@15',
    'Shoot Left@6@5',
    'Reverse',
    'Game over',
    ''
  ]))