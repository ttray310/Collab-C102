
function carQuestion(){

    let favCar = prompt ("What is your favorite American car?");
    let CarAns;
    // console.log (favCar)
    
    if (favCar == "Ford GT") {
        CarAns = "You are the smartest cookie!!";
        document.write ("Your favorite car is a " + favCar + "? ");
        document.write (CarAns);
    } else if (favCar.toLowerCase() == "ford gt") {
        CarAns = "Mine too! Almost perfect...";
        document.write ("Your favorite car is a " + favCar + "? ");
        document.write (CarAns);
    }  else {
        alert("Try the ford gt yet?")
        carQuestion();
    }
    
    // document.write ("Your favorite car is a " + favCar + "? ");
    // document.write (CarAns);
};


function carNumPicks(){
    let numPick = prompt ("How many beautiful cars would you like to see??");
    let pickedNumber;

    for (let i = 0; i < numPick; i++){   
        
        document.write("<img class='newcars' src='https://imgs.search.brave.com/8kc8MUsHzpKxQYXxYDacMdQWReiegpxcwbroXbdpNbE/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zZWN1/cmVzZXJ2ZXJjZG4u/bmV0LzE5OC43MS4y/MzMuNS82NTIuMzU2/Lm15ZnRwdXBsb2Fk/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxOC8xMC9OZXct/Rm9yZC1HVC1Db21w/ZXRpdGlvbi1TZXJp/ZXMtUmVhci5qcGc' />");    
        // console.log(i);
    };
   
};

        // numPick += "<img src='https://imgs.search.brave.com/VvdwCeukRttTL9wJ7owxwEZ86-pO1wk14pM1f5DqpdE/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9hbGxo/ZHdhbGxwYXBlcnMu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE1LzA2L0ZvcmQt/R1QtNi5qcGc'>";

// let carCost = prompt ("How much money do you think it is for a new Ford GT? Best guess");
// let carGuess;

// if (carCost < 200000) {
//     carGuess = "Way Higher..";
// } else if (carCost < 400000) {
//     carGuess = "Higher..";
// } else if (carCost < 450000) {
//     carGuess = "Higher, but just a bit..";
// } else if (carCost < 400000) {
//     carGuess = "Higher..";

// } else if (carCost == 500000) {
//     carGuess = "Higher..";
// } else if (carCost > 500000) {
//     carGuess = "Lower than that actually";
// } else {
//     carGuess = "Try a big round number, no ',' or '$'";
// }



