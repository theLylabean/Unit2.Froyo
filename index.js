const userInput = prompt (
    "Please enter a list of froyo flavors separated by a comma.", 
    "Vanilla, vanilla, vanilla, strawberry, coffee, coffee"
);

const froyoFlavor = userInput.split(",")
console.log(froyoFlavor)
console.table(froyoFlavor)