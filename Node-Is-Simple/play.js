var name = "Akshay";
var age = 26;
var isAdult = true;

const userDetails = (userName, userAge, UserIsAdult)=> {
  return (
    "Name is " +
    userName +
    " and age is " +
    userAge +
    " and isAdult " +
    UserIsAdult
  );
}



const add = a => a+1;
console.log(add(3));


const person = {
    name : "Akshay",
    age : 26,
    greed() {
        console.log('Hi I am the user name : ', this.name);
    }
}

const printData  = (data) => {
    console.log(data.name, data.age);
}

printData(person);

const  {name, age, isAdult} = person;
console.log(name,age);

person.greed()


const hobbies = ['Sport', 'Cooking'];


console.log(hobbies.map(hobby => 'Hobby: '+ hobby))


//spread operator
const arr = ['arr1','arr2','arr3','arr4','arr5'];

const arr1 = [...arr];

console.log(arr1);

// rest operator

const arguments = (...args) =>{
    return args;    
}

console.log(arguments(1,3,5,7));