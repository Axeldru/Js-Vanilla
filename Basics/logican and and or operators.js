let isGuestOneVegan = true
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log("Offer up vegan dishes")
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log("Make sure to offer some vegan dishes")
} else {
    console.log("Offer up anything on the menu")
}