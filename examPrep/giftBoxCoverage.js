function solve(arr){
    let side = Number(arr.shift());
    let sheets = Number(arr.shift());
    let singleAreaSheet = Number(arr.shift());
    let area = side * side * 6;
    let coverArea = 0;
    for(let i = 1; i <= sheets; i++){
        coverArea += singleAreaSheet;
        if(i % 3 === 0){
            coverArea -= 0.75 * singleAreaSheet;
        }
    }
    let percentage = (coverArea / area) * 100;
    console.log(`You can cover ${percentage.toFixed(2)}% of the box.`);
}
solve([ '5', '30', '4' ]);
solve([ '2.5', '32', '4.25' ]);