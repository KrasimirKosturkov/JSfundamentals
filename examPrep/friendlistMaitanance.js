function solve(arr){
   let friendList = arr.shift().split(', ');
   let bleckListedNamesCount = 0;
   let lostNamesCount = 0;
   for(let command of arr){
      let [cmd, second, last] = command.split(' ');
      if(cmd === 'Report'){
          break;
      }
      if(cmd === 'Blacklist'){
          if(friendList.includes(second)){
              console.log(`${second} was blacklisted.`);
              bleckListedNamesCount++;
              friendList[friendList.indexOf(second)] = 'Blacklisted';
          }else{
              console.log(`${second} was not found.`)
          }
      }
      if(cmd === 'Error'){
          let index = +second;
          if(friendList[index] !== 'Blacklisted' &&friendList[index] !== 'Lost'){
              console.log(`${friendList[index]} was lost due to an error.`)
              friendList[index] = 'Lost';
              lostNamesCount++;
          }
      }
      if(cmd === 'Change'){
          let index = +second;
          if(0 <= index && index < friendList.length 
            && friendList[index] !== 'Blacklisted' && friendList[index] !== 'Lost'){
                console.log(`${friendList[index]} changed his username to ${last}.`);
                friendList[index] = last;
            }
      }
   }
   return `Blacklisted names: ${bleckListedNamesCount} \nLost names: ${lostNamesCount} \n${friendList.join(' ')}`;
}
console.log(solve([
    'Mike, John, Eddie',
    'Blacklist Mike',
    'Error 0',
    'Error 1',
    'Change 2 Mike123',
    'Report'
  ]));
  console.log(solve([
    'Mike, John, Eddie, William',
    'Error 3',
    'Error 3',
    'Change 0 Mike123',
    'Blacklist Eddie',
    'Report'
  ]));
  console.log(solve([
    'Mike, John, Eddie, William',
    'Blacklist Mike',
    'Error 1',
    'Blacklist Eddie',
    'Error 3',
    'Report'
  ]));