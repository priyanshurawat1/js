const arr = [5,2,7,1,0]

// for (const num of arr) {
//     console.log(num);
// }

const greetings = "Good Evening"
for (const greet of greetings) {
    // console.log(greet);
}

const mpp = new Map()
mpp.set('IN','India')
mpp.set('USA','United States Of America')
mpp.set('FR','France')
mpp.set('IN','Ind')
// console.log(mpp);

for (const [k,v] of mpp) {
    console.log(k,'->',v);
}