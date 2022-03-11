let myBook = {
    title: 1984,
    author: "George Orwell",
    pageCount: 326
}

let otherBook = {
    title: "A Peoples History",
    author: "Howard Zinn",
    pageCount: 723
}

let getSummary = function (book) {
    
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${otherBook.title} is ${otherBook.pageCount} pages long.` 
    }
}

let resultMyBook = getSummary(myBook)
let resultOtherBook = getSummary(otherBook)

console.log(resultMyBook.summary);
console.log(resultOtherBook.pageCountSummary);

//Note for me: IF I don't put a string concatination in retun I can define the celsius,kelvin,fahrenheit inside the return.
// ${} can't realise the variables if they are in the same return.

let temperature = function(fahrenheit) {

    let celsius = (fahrenheit - 32 ) * 5/9
    let kelvin = (fahrenheit + 459.67 ) * 5/9 
    
    return {
        celsius: celsius,
        kelvin: kelvin,
        fahrenheit: fahrenheit,
       temperatures:  `The temperatures in different things are ${celsius} in celsius, ${fahrenheit} in fahrenheit and ${kelvin} in kelvin.`
    }
}

let finalTemperature = temperature(30)

console.log(finalTemperature.temperatures, finalTemperature.celsius, finalTemperature.fahrenheit, finalTemperature.kelvin); 