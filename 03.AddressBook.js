function solve(input){
let address = {};

for(let line of input){
    let [name, home] = line.split(`:`);
    address[name] = home;
}
let sorted = Object.entries(address).sort((a,b) => a[0].localeCompare(b[0])).forEach(x => console.log(`${x[0]} -> ${x[1]}`))

}
solve(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'])