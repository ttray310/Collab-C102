let favCar = prompt ('What is your favorite American car?');
let CarAns;
// console.log (favCar)

if (favCar == "Ford GT") {
    CarAns = "You are the smartest cookie!!";
} else if (favCar.toLowerCase() == "ford gt") {
    CarAns = "Mine too! Almost perfect...";
}  else {
    CarAns = "Maybe one day you'll know what you like...";
}

document.write ('Your favorite car is ' + favCar + '! ');
document.write (CarAns);


