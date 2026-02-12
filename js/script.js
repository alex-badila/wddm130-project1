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

let subTotal = 0, tax = 0.13, total = 0, grandTotal = 0;
let cart = document.getElementById("cart");


const displayProducts = () => {
    let left = document.getElementById("left");
    let content = "<section>";

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

        content += `<div class="product">`
        // Add the image
        content += `<img src="${image}" height="200" width="200" alt="${productName}"/> `;
        // Add the product name
        content += `<h3>${productName}</h3>`;
        // Add the price
        content += `<p class="price">$${price.toFixed(2)}</p>`;
        // Add the quantity, and give it an id depending on the product
        let productId = productName.toLowerCase().replace(/[:\s]/g, '-');
        content += `<label for="${productId}-quantity">Quantity:</label>`;
        content += `<input type="number" id="${productId}-quantity" min="0" value="0">`;

        // Add the button, and it an id depending on the product
        content += `<button id = "${productId}-button">Buy Now</button>`;

        content += `</div>`;
    }

    content += "</section>";

    // Display the product on the page
    left.innerHTML = content;

    attachEventListeners();
}

function attachEventListeners() {
    let neuromancerButton = document.getElementById("neuromancer-button");
    let theMatrixDVDButton = document.getElementById("the-matrix-dvd-button");
    let equilibriumDVDButton = document.getElementById("equilibrium-dvd-button");
    let monaLisaOverdriveButton = document.getElementById("mona-lisa-overdrive-button");
    let countZeroButton = document.getElementById("count-zero-button");
    let ghostInTheShellDVDButton = document.getElementById("ghost-in-the-shell-dvd-button");
    let akiraDVDButton = document.getElementById("akira-dvd-button");
    let alitaBattleAngelDVDButton = document.getElementById("alita--battle-angel-dvd-button");

    neuromancerButton.addEventListener("click", handleClick);
    theMatrixDVDButton.addEventListener("click", handleClick);
    equilibriumDVDButton.addEventListener("click", handleClick);
    monaLisaOverdriveButton.addEventListener("click", handleClick);
    countZeroButton.addEventListener("click", handleClick);
    ghostInTheShellDVDButton.addEventListener("click", handleClick);
    akiraDVDButton.addEventListener("click", handleClick);
    alitaBattleAngelDVDButton.addEventListener("click", handleClick);
}

// If clicked, add the relevant information to the shopping cart
function handleClick() {
    // Get the product ID without the "-button" suffix
    let productId = this.id.replace('-button', '');
    
    // Get the product's data from the DOM
    let productCard = this.closest('.product');
    let productName = productCard.querySelector('h3').textContent;
    let productPrice = parseFloat(productCard.querySelector('.price').textContent.replace('$', ''));
    let quantityInput = document.getElementById(productId + '-quantity');
    let quantity = parseInt(quantityInput.value);
    
    // Validate quantity
    if (quantity <= 0) {
        alert("Please enter a quantity greater than 0");
        return;
    }

    // Calculate subtotal for this item
    let itemSubtotal = productPrice * quantity;
    
    // Create cart item display
    let cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
        <h4>${productName}</h4>
        <p>Qty: ${quantity} × $${productPrice.toFixed(2)}</p>
        <p><strong>$${itemSubtotal.toFixed(2)}</strong></p>
    `;
    cart.appendChild(cartItem);
    
    // Update totals
    subTotal += itemSubtotal;
    let taxAmount = subTotal * tax;
    grandTotal = subTotal + taxAmount;
    
    // Display or update totals section
    let totalsSection = document.getElementById("totals");
    if (!totalsSection) {
        totalsSection = document.createElement("div");
        totalsSection.id = "totals";
        cart.appendChild(totalsSection);
    }
    
    totalsSection.innerHTML = `
        <p><strong>Subtotal: $${subTotal.toFixed(2)}</strong></p>
        <p>Tax (13%): $${taxAmount.toFixed(2)}</p>
        <p><strong>Total: $${grandTotal.toFixed(2)}</strong></p>
    `;
    
    // Reset the quantity input
    quantityInput.value = 0;
}

const generateReceipt = () => {
    // Extract all the relevant values from the form
    let thisForm = document.forms["checkoutForm"];
    let email = thisForm["email"].value;
    let productType = thisForm["productType"].value;
    let quantity = thisForm["quantity"].value;
    let promoCode = thisForm["promoCode"].value;
    let postalCode = thisForm["postalCode"].value;
    let phoneNumber = thisForm["phoneNumber"].value;



    return false;
}
