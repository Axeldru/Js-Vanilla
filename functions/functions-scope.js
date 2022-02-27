let convertFahrenheitToCelsius = function(fahrenheit) {
    let Celsius = (fahrenheit-32) * 5/9

    if (Celsius <= 0) {
        let isFreezing = true
    }    
    
    return Celsius
}
let convert1 = convertFahrenheitToCelsius(32)
let convert2 = convertFahrenheitToCelsius(68)

console.log(convert1);
console.log(convert2)
