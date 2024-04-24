// Stack(Primitive) , Heap(Non-primitive)

let nickname = "Piyush"

let name = nickname
name = "Priyanshu"
console.log(name)
console.log(nickname);

let userone = {
    email: "userone@google.com",
    upi: "userone@ybl"
}

let usertwo = userone

usertwo.email = "usertwo@google.com"

console.log(userone.email);
console.log(usertwo.email);