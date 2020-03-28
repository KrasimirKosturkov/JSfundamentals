function solve(arr){
   let days = Number(arr.shift());
   let plunderForADay = Number(arr.shift());
   let expectedPlunder = Number(arr.shift());
   let totalPlunder = 0;
   for(let i = 1; i <= days; i++){
       totalPlunder +=  plunderForADay;
       if(i % 3 === 0){
           totalPlunder += 0.5 * plunderForADay;
       }
       if(i % 5 === 0){
           totalPlunder -= 0.3 * totalPlunder;
       }
   }
   if(totalPlunder >= expectedPlunder){
       console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
   }else{
       let percentage = (1 - (expectedPlunder - totalPlunder) / expectedPlunder) * 100;
       console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
   }
}
solve([ '5', '40', '100' ]);
solve([ '10', '20', '380' ]);