// Singleton --> Object.create

// Object literals
mySym = Symbol(1)
// console.log(typeof mySym);

const JsUser = {
    name : 'Priyanshu',
    'fullname' : 'Priyanshu Rawat',
    age : 18,
    location : 'delhi',
    email : 'work@google.com',
    isLoggedIn : false,
    [mySym]: 'key1'
}

// console.log(JsUser.location);
// console.log(JsUser['location']);
// console.log(JsUser['fullname']);
// console.log(JsUser.fullname);
// console.log(JsUser[mySym]);
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Good Morning");
}
console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Good Morning, ${this.fullname}`);
}
console.log(JsUser.greetingTwo());