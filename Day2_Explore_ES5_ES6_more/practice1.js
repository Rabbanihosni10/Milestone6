const players=[75,65,67,72,55,59];
//map part
//Make a multiply of 5 and  addition of 5 with each element
const mapPart1=players.map(player=>player*5);
const mapPart2=mapPart1.map(player=>player+5);
console.log(players);
console.log(mapPart1);
console.log(mapPart2);
//forEach part
//just iterate and multiply with 2
const forEachPart1=players.forEach(player=>console.log(player,player*2));
console.log(forEachPart1);
//find part
const findPart=players.find(player=>player>70);
console.log(findPart);
//filter part
const filterPart=players.filter(player=>player>70);
console.log(filterPart);
//reduce part