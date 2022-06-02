function solve(input) {

    let meetings = {};

    for(let line of input){
        let [day, name] = line.split(` `)
        if(meetings.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`);
        }else {
            meetings[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }
    let array = Object.entries(meetings);
    array.forEach(x => console.log(`${x[0]} -> ${x[1]}`));
        

}
solve(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
