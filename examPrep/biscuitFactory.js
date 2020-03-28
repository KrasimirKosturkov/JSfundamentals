function solve(arr){
   let amountOfBiscuit = Number(arr.shift());
   let workersCount = Number(arr.shift());
   let amount = Number(arr.shift());
   let countBiscuit = 0;
    for(let i = 1; i <=30; i++){
       if(i % 3 === 0){
          countBiscuit += Math.floor(0.75 * amountOfBiscuit * workersCount);
       }else{
           countBiscuit += amountOfBiscuit * workersCount ;
       }
    }
   console.log(`You have produced ${countBiscuit} biscuits for the past month.`);
   let diff = countBiscuit - amount;
   if(diff > 0){
       let percent = (diff / amount) * 100;
       return `You produce ${percent.toFixed(2)} percent more biscuits.`;
   }else{
       let percent = (Math.abs(diff)/ amount) * 100;
       return `You produce ${percent.toFixed(2)} percent less biscuits.`;
   }
}
console.log(solve([ '78', '8', '16000' ]));
console.log(solve([ '65', '12', '26000' ]));