let add = function (a, b, c) {
    return a + b + c
}

let result = add(1, 2, 3)
console.log(result);

let findTipPercent = function (total, tipPercent = .2 ) {
    let percent = tipPercent * 100
    let tip = total * tipPercent   
    return `A ${percent}% tip on $${total} would be ${tip}$`
}
  let nicetip = findTipPercent(40, .25);
  console.log(nicetip)
  
  