const tinderUser = new Object()

tinderUser.id = "abs123"
tinderUser.name = "Arrow"
tinderUser.isLoggedIn = true

// console.log(tinderUser);

const instaUser ={
    instaId : "bcd_001",
    fullname :{
        userfullname : {
            firstname : "user1",
            lastname : "last1"
        }
    }
}

// console.log(instaUser.fullname);
// console.log(instaUser.fullname.userfullname);
// console.log(instaUser.fullname.userfullname.lastname);

const obj1 = {1: "a",2: "b"}
const obj2 = {3: "c",4: "d"}
// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);

const obj3 = {...obj1,...obj2}
// console.log(obj3);


// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

const course = {
    coursename: "js",
    price: 999,
    courseInstructor: "Hitesh sir"
}
console.log(course)

const {courseInstructor: ins} = course
console.log(ins)