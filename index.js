const userInput = prompt (
    "Please enter a list of froyo flavors separated by a comma.", 
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

const froyoFlavor = userInput.split(",")
console.log(froyoFlavor)
// console.table(froyoFlavor)
// separating in to 6 separate elements

const flavorObj = froyoOrder(froyoFlavor)
function froyoOrder (flavorsArr){
// emplty object assined to flavors
const flavors = {};
// next create a loop to go through the array from the userInput
// need a loop that works with an array
// best option for this is a for of loop because we are not tracking i as a value

for(const input of flavorsArr){
    console.log(input)
// create a variable 
// "const input" represents the current element of the array
    if(flavors[input]){
        flavors[input]=flavors[input] + 1;
        //flavors[input]+=1 shorter way to write line 21
    }
    else{
        flavors[input]=1;
    }
 }
return flavors;
}
console.log(flavorObj)
console.table(flavorObj)

// // with a function, can call as many times as needed
// // if not in a function, it will only run one time
// // emplty object assined to flavors
// const flavors = {};
// // next create a loop to go through the array from the userInput
// // need a loop that works with an array
// // best option for this is a for of loop because we are not tracking i as a value

// for(const input of froyoFlavor){
//     console.log(input)
// // create a variable 
// // "const input" represents the current element of the array
//     if(flavors[input]){
//         flavors[input]=flavors[input] + 1;
//         //flavors[input]+=1 shorter way to write line 21
//     }
//     else{
//         flavors[input]=1;
//     }
// }
// console.log(flavors)
// console.table(flavors)


