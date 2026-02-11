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

const displayProducts = () => {
    let main = document.querySelector("main");
    let productDisplay, content, contentTop = `<section>`, contentBottom = `</section>`;

    // Create the array for the items to sell
    // Product Image Product Name Price
    const products = ["neuromancer.jpg", "Neuromancer", 25.99,
                        "the-matrix-dvd.jpg", "The Matrix DVD", 19.99,
                        "equilibrium-dvd.jpg", "Equilibrium DVD", 29.99,
                        "mona-lisa-overdrive.jpg", "Mona Lisa Overdrive", 15.99,
                        "count-zero.jpg", "Count Zero", 25.99,
                        "ghost-in-the-shell-dvd.jpg", "Ghost in the Shell DVD", 12.99,
                        "akira-dvd.jpg", "Akira DVD", 26.99,
                        "alita-battle-angel-dvd.jpg", "Alita: Battle Angel DVD", 19.99
    ]

    // Loop through the array and display its information on the page
    for(let i = 0; i < products.length; i += 3) {
        let image = products[i];
        let productName = products[i + 1];
        let price = products[i + 2];

        console.log(image);
        console.log(productName);
        console.log(price);
        console.log("\n");
        // Add the image
        // content += `<img src="${product[i]}" height="200" width="200">`;
        // // Add the product name
        // content += `<p>${product[i + 1]}`
    }
}
