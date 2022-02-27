let convertFahrenheitToCelsius = function(fahrenheit) {
    let Celsius = (fahrenheit-32) * 5/9
    return Celsius
}
let convert1 = convertFahrenheitToCelsius(32)
let convert2 = convertFahrenheitToCelsius(68)

console.log(convert1);
console.log(convert2)


