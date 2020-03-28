function solve(arr){
   let steps = Number(arr.shift());
   let oneStepInCentimeters = Number(arr.shift());
   let distanceInCentimeters = Number(arr.shift()) * 100;
   let percentage = 0;
   let distance = 0;
   for(let i = 1; i <= steps; i++){
       distance += oneStepInCentimeters;
       if(i % 5 === 0){
           distance -= 0.3 * oneStepInCentimeters;
       }
   }
   percentage = (distance / distanceInCentimeters) * 100;
   console.log(`You travelled ${percentage.toFixed(2)}% of the distance!`);
}
solve([ '100', '2', '1' ]);
solve([ '5000', '7.5', '500' ]);