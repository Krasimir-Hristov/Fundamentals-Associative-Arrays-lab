function solve(input){
let phoneBook = {};

for ( let line of input){
    let [name, number] = line.split(` `);
    phoneBook[name] = number;
    if(phoneBook.hasOwnProperty(name)){
        name[number] = number;
    }
}

let array = Object.entries(phoneBook);
for(let[name, number] of array){
    console.log(`${name} -> ${number}`);
}
}
solve(['George 0552554',
'Peter 087587',
'George 0453112',
'Bill 0845344'])