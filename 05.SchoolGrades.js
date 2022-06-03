function solve(input){

let result = new Map();

for(let line of input){
    let tokens = line.split(` `);
    let name = tokens.shift();
    let grades = tokens.map(Number);


   
    if(result.has(name) == false){
        result.set(name, []);
    }
    let existing = result.get(name);
    for(let grade of grades){
        existing.push(grade);
       
    }
   
}
let sorted = Array.from(result).sort((a, b) => a[0].localeCompare(b[0]));


for(let [name, grades] of sorted){
    let avg = 0;
    for(let grade of grades){
        avg += grade;
    }
    avg /= grades.length;
    console.log(`${name}: ${avg.toFixed(2)}`)
}



}
solve(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6'])