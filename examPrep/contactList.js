function solve(arr){
    let contacts = arr.shift().split(' ').slice();
    for(let i = 0; i < arr.length; i++){
        let [cmd, second, third] = arr[i].split(' ');
        if(cmd === 'Add'){
            if(!contacts.includes(second)){
                contacts.push(second);
            }else{
                if(0 <= +(third) && +(third) < contacts.length){
                    contacts.splice(+(third), 0, second);
                }
            }
        }
        if(cmd === 'Remove'){
            if(0 <= +(second) && +(second) < contacts.length){
                contacts.splice(+(second), 1);
            }
        }
        if(cmd === 'Export'){
            let exported = [];
            for(let i = +(second); i <= Math.min(+(third), contacts.length - 1); i++){
               exported.push(contacts[i]);
            }
            console.log(exported.join(' '));
        }
        if(cmd === 'Print' && second === 'Normal'){
            console.log(`Contacts: ${contacts.join(' ')}`)
            return;
        }
        if(cmd === 'Print' && second === 'Reversed'){
            console.log(`Contacts: ${contacts.reverse().join(' ')}`);
            return;
        }
    }
}
solve([
    'Alisson Bellamy Candace Tristan',
    'Remove 3',
    'Add Bellamy 2',
    'Print Normal'
  ]);
  solve([
    'Zayn Katy Ariana Avril Nick Mikolas',
    'Remove 3',
    'Add Jacob 0',
    'Export 0 3',
    'Export 3 8',
    'Print Reversed'
  ]);