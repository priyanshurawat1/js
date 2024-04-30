const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros =["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

const all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const arr =[1,2,3,[4,5],6,[7,8,[9,10]],11]
// console.log(arr.flat(Infinity));



// console.log(Array.isArray('Arrowog'));
// console.log(Array.from('Arrowog'));

let n1 = 57
let n2 = 25
let n3 = 14
console.log(Array.of(n1,n2,n3));