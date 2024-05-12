const user = {
    username: "Priyanshu",
    password: 562647,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "kid"
// user.welcomeMessage()
// console.log(this);


function chai() {
    console.log(this);
}
// chai()

const code = () => {
    console.log(this);
}
// code()

// const addTwo = (num1, num2) => {
//     return num1+num2
// }

const addTwo = (num1, num2) => (num1 + num2)

console.log(addTwo(5,2))

// const code1 = () => {
//     return {
//         username: "priyanshu"
//     }
// }

const code1 = () => ({username: "priyanshu"})

console.log(code1());