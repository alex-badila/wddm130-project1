// // Declare variables to use in the program
// let neuromancerCost = 25.99;
// let theMatrixDVDCost = 19.99;
// let equilibriumDVDCost = 29.99;
// let monaLisaOverdriveCost = 15.99;
// let countZeroCost = 25.99;
// let ghostInTheShellDVDCost = 12.99;
// let akiraDVDCost = 26.99;
// let alitaBattleAngelDVDCost = 19.99;  
// let total = 0;
// let tax = 1.13;

// // Add the total to the HTML
// document.getElementById("total").innerHTML = total;

// // Create variables to represent all the buttons
// let neuromancerButton = document.getElementById("neuromancerButton");
// let theMatrixDVDButton = document.getElementById("theMatrixDVDButton");
// let equilibriumDVDButton = document.getElementById("equilibriumDVDButton");
// let monaLisaOverdriveButton = document.getElementById("monaLisaOverdriveButton");
// let countZeroButton = document.getElementById("countZeroButton");
// let ghostInTheShellDVDButton = document.getElementById("ghostInTheShellDVDButton");
// let akiraDVDButton = document.getElementById("akiraDVDButton");
// let alitaBattleAngelDVDButton = document.getElementById("alitaBattleAngelDVDButton");

// // Listen for the click for all the buttons
// // If clicked, handle the click
// neuromancerButton.addEventListener("click", handleClick);
// theMatrixDVDButton.addEventListener("click", handleClick);
// equilibriumDVDButton.addEventListener("click", handleClick);
// monaLisaOverdriveButton.addEventListener("click", handleClick);
// countZeroButton.addEventListener("click", handleClick);
// ghostInTheShellDVDButton.addEventListener("click", handleClick);
// akiraDVDButton.addEventListener("click", handleClick);
// alitaBattleAngelDVDButton.addEventListener("click", handleClick);

// // If clicked, check which button was clicked
// // Then add the corresponding cost to the total, including tax
// // Then add the total to the HTML
// // Display an error message if the input is invalid
// function handleClick() {
//     if(this.id === "neuromancerButton") {
//         total += neuromancerCost * tax;
//         document.getElementById("total").innerHTML = total.toFixed(2);
//     }
//     else if(this.id === "theMatrixDVDButton") {
//         total += theMatrixDVDCost * tax;
//         document.getElementById("total").innerHTML = total.toFixed(2);
//     }
//     else if(this.id === "equilibriumDVDButton") {
//         total += equilibriumDVDCost * tax;
//         document.getElementById("total").innerHTML = total.toFixed(2);
//     }
//     else if(this.id === "monaLisaOverdriveButton") {
//         total += monaLisaOverdriveCost * tax;
//         document.getElementById("total").innerHTML = total.toFixed(2);
//     }
//     else if(this.id === "countZeroButton") {
//         total += countZeroCost * tax;
//         document.getElementById("total").innerHTML = total.toFixed(2);
//     }
//     else if(this.id === "ghostInTheShellDVDButton") {
//         total += ghostInTheShellDVDCost * tax;
//         document.getElementById("total").innerHTML = total.toFixed(2);
//     }
//     else if(this.id === "akiraDVDButton") {
//         total += akiraDVDCost * tax;
//         document.getElementById("total").innerHTML = total.toFixed(2);
//     }
//     else if(this.id === "alitaBattleAngelDVDButton") {
//         total += alitaBattleAngelDVDCost * tax;
//         document.getElementById("total").innerHTML = total.toFixed(2);
//     }
//     else {
//         alert("Error! Invalid input.")
//     }
// }

