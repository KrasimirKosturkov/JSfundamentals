function solve(arr){
   let nameOfWeapon = arr.shift().split('|');
let even = [];
let odd = [];
   for(let command of arr){
       let [cmd, second, last] = command.split(' ');
       if(cmd === 'Done'){
           break;
       }
       
       if(cmd === 'Move' && second === 'Right'){
           if(0 <= +last && +last < nameOfWeapon.length - 1){
               let  moved = nameOfWeapon.splice(+last, 1);
               nameOfWeapon.splice(+last + 1, 0, moved);
           }
       }
       if(cmd === 'Move' && second === 'Left'){
           if(0 < +last && +last < nameOfWeapon.length){
               let moved = nameOfWeapon.splice(+last, 1);
               nameOfWeapon.splice(+last - 1, 0, moved);
           }
       }
       
       if(cmd === 'Check' && second === 'Even'){
        for(let index in nameOfWeapon){
           if(+(index) % 2 === 0){
              let evn = nameOfWeapon.slice(+(index), +(index) + 1);
              even.push(evn);
           }
           
        }
        console.log(even.join(' '));
       }
       if(cmd === 'Check' && second === 'Odd'){
        for(let index in nameOfWeapon){
            if(+(index) % 2 === 1){
                let od = nameOfWeapon.slice(+(index), +(index) + 1);
                odd.push(od);
            }
        }
        console.log(odd.join(' '));
       }
    }
   return `You crafted ${nameOfWeapon.join('')}!`;
}
console.log(solve([
    'ha|Do|mm|om|er',
    'Move Right 0',
    'Move Left 3',
    'Check Odd',
    'Move Left 2',
    'Move Left 10',
    'Move Left 0',
    'Done'
  ]));
  console.log(solve([
    'ri|As|er|hb|ng',
    'Move Left 1',
    'Move Right 2',
    'Move Right 3',
    'Move Left 2',
    'Done'
  ]));
  console.log(solve([
    'Ve|or|nd|st|ke|ri',
    'Check Even',
    'Move Right 5',
    'Move Left 2',
    'Move Left 0',
    'Move Right 4',
    'Done'
  ]));