function solve(arr){
    let numbers = arr.shift().split(' ').map(Number);
    let sumNegative = 0;
    let sumPositive = 0;
    let sum = 0;
    for(let command of arr){
        let [cmd, second, last] = command.split(' ');
        if(cmd === 'End'){
            break;
        }
        if(cmd === 'Switch'){
            if(0 <= +(second) && +(second) < numbers.length){
                    numbers[+(second)] = -numbers[+(second)];
            }
        }
        if(cmd === 'Change'){
            if(0 <= +(second) && +(second) < numbers.length){
            numbers[+(second)] = +(last);
           }

        }
        if(cmd === 'Sum' && second === 'Negative'){
            for(let i = 0; i < numbers.length; i++){
                if(numbers[i] < 0){
                    sumNegative += numbers[i];
                    sum += sumNegative;
                }
            }
            console.log(sumNegative);
        }
        if(cmd === 'Sum' && second === 'Positive'){
            for(let i = 0; i < numbers.length; i++){
                if(numbers[i] >= 0){
                    sumPositive += numbers[i];
                    sum += sumPositive;
                }
            }
            console.log(sumPositive);
        }
        if(cmd === 'Sum' && second === 'All'){
            sum = numbers.reduce((a, b) => a + b);
            console.log(sum);
        }
    }
    numbers = numbers.filter(a => a>=0);
    return numbers.join(' ');
}
console.log(solve([ '1 2 3 4 5', 'Switch 4', 'Change 0 -3', 'Sum Negative', 'End' ]));
console.log(solve([
    '1 2 3 4 5 4 3 2 1 0',
    'Switch -4',
    'Change 13 0',
    'Switch 0',
    'Sum All',
    'End'
  ]));