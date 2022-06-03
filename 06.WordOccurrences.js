function solve(input){

let result = {};

for(let line of input){
    if(result.hasOwnProperty(line) == false){
        result[line] = 1
    }else{
        result[line] += 1
    }
}

let sorted = Object.entries(result)
.sort((a, b) => b[1] - a[1])
.forEach(x => console.log(`${x[0]} -> ${x[1]} times`));
}
solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])