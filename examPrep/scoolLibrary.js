function solve(arr){
    let initialLibrary = arr.shift().split('&');
  

    for(let command of arr){
        let [first, second, last] = command.split(' | ');
        first = first.split(' ');
        
         if(first[0] === 'Done'){
             break;
         }
         if(first[0] === 'Add' && first[1] === 'Book'){
            if(!initialLibrary.includes(second)){
                initialLibrary.unshift(second);
            }
         }
         if(first[0] === 'Take' && first[1] === 'Book'){

             if(initialLibrary.indexOf(second)){
              let index = initialLibrary.indexOf(second);
              initialLibrary.splice(index, 1);
             }
         }
         if(first[0] === 'Swap' && first[1] === 'Books'){
             if(initialLibrary.includes(second)&& initialLibrary.includes(last)){
                let indexSecond = initialLibrary.indexOf(second);
                let indexLast = initialLibrary.indexOf(last);
                initialLibrary.splice(indexSecond, 1, last);
                initialLibrary.splice(indexLast, 1, second);
             }
         }
         if(first[0] === 'Insert' && first[1] === 'Book'){
             initialLibrary.push(second);
         }
         if(first[0] === 'Check' && first[1] === 'Book'){
             if(0 < + second && +second < initialLibrary.length){
                 console.log(initialLibrary[+second]);
             }
         }
    }
    return initialLibrary.join(', ');
}
console.log(solve([
    'Don Quixote&The Great Gatsby&Moby Dick&Hamlet',
    'Add Book | The Odyssey',
    'Take Book | Don Quixote',
    "Insert Book | Alice's Adventures in Wonderland",
    'Check Book | 3',
    'Done',
    '',
    '',
    ''
  ]));
console.log(solve([
    'Anna Karenina&Heart of Darkness&Catch-22& The Stranger',
    'Add Book | David Copperfield',
    'Add Book | One Thousand and One Nights',
    'Swap Books | One Thousand and One Nights | Catch-22',
    'Take Book | David Copperfield',
    'Insert Book | The Stories of Anton Chekhov',
    'Check Book | 17',
    'Done',
    ''
  ]));