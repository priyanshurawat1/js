const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.map( (nums) => nums + 5)
// console.log(newNums);
// myNums.forEach( (nums) => console.log(nums + 5))


const newNums = myNums
                    .map( (nums) => nums * 10)
                    .map( (nums) => nums - 1)
                    .filter( (nums) => nums > 50)
console.log(newNums);
