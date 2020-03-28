function solve(arr){
    let listOfTanks = arr.shift().split(', ');
    let n = Number(arr.shift());
    for(let i = 1; i <= n; i++){
        let [command, second, last] = arr.shift().split(', ');
        let [cmd, third] = command.split(' ');
        if(cmd === 'Add'){
           if(listOfTanks.includes(second)){
               console.log(`Tank is already bought`);
           }else{
               console.log(`Tank successfully bought`);
               listOfTanks.push(second);
           }
        }
        if(cmd === 'Remove' && third === 'At'){
            let index = +second;
            if(0 > index || index > listOfTanks.length - 1){
                console.log(`Index out of range`);
            }else{
                console.log(`Tank successfully sold`);
                listOfTanks.splice(index, 1);
            }
        }else if(cmd === 'Remove'){
            if(listOfTanks.includes(second)){
               console.log(`Tank successfully sold`);
               let index = listOfTanks.indexOf(second);
               listOfTanks.splice(index, 1);
            }else{
                console.log(`Tank not found`);
            }
        }
        if(cmd === 'Insert'){
            let index = +second;
            if(0 <= index && index < listOfTanks.length){
                if(!listOfTanks.includes(last)){
                    console.log(`Tank successfully bought`);
                    listOfTanks.splice(index, 0, last);
                }else{
                    console.log(`Tank is already bought`);
                }
            }else{
                console.log(`Index out of range`);
            }
        }
    }
    console.log(listOfTanks.join(', '));
}
solve([
    'T-34-85 Rudy, SU-100Y, STG',
    '3',
    'Add, King Tiger(C)',
    'Insert, 2, IS-2M',
    'Remove, T-34-85 Rudy'
  ]);
  solve([
    'T 34, T 34 B, T92, AMX 13 57',
    '4',
    'Add, T 34',
    'Remove, AMX CDC',
    'Insert, 10, M60',
    'Remove At, 1'
  ]);
  solve([
    'T-34-85 Rudy, SU-100Y, STG',
    '3',
    'Remove, SU-100Y',
    'Remove, T-34-85',
    'Remove, STG'
  ]);