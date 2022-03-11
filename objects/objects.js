let myBook = {
    title: 1984,
    author: "George Orwell",
    pageCount: 326
}

console.log(`${myBook.title} written by ${myBook.author} with only ${myBook.pageCount} pages!`);

//Another example

let person = {
    name: "Alex",
    age: 20,
    location: "California"
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}.`);

//We can modify the object

person.age = person.age + 1

console.log(`${person.name} is ${person.age} and lives in ${person.location}.`);    
