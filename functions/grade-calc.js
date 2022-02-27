
//A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

Finalgrade = function (studentScore, totalScore) {
   let letter = ""
   let percent = (studentScore / totalScore) * 100

    if ( studentScore >= 90 ) {
        letter = "A"
    } else if (studentScore >= 80) {
        letter = "B"
    } else if(studentScore >= 70 ) {
        letter = "C"
    } else if (studentScore >= 60) {
        letter = "D"
    } else {
        letter = "F"
    }
    return `You got a ${letter} and (${percent}%)!`
}

let rezultat = Finalgrade (10, 20)
console.log(rezultat); 
