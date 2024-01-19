// const tinderUser = new Object()


const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "mayu"
tinderUser.isLoggedIn = true

// console.log(tinderUser);

const regularUser = {
    email : "mk@gmail.com",
    fullname : {
        firstname : "mayur",
        lastname : "kul"
    }

}

// console.log(regularUser.fullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const course = {
    coursename: "'js in hindi",
    price: 888,
    courseinstructor: "mayur"
}

const {courseinstructor: instructor} = course

console.log(instructor);