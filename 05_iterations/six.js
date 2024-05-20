const myNums = [1,2,3,4,5]

// const mySum = myNums.reduce( function (acc,curr){
//     console.log(`acc: ${acc} and curr: ${curr}`);
//     return acc+curr
// },0
// )

const mySum = myNums.reduce( (acc,curr) => acc+curr, 0)
console.log(mySum);