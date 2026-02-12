let subTotal = 0, tax = 0.13, total = 0, grandTotal = 0;
let cart = document.getElementById("cart");
let receipt = document.getElementById("receipt");

// Dynamically displays the products
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

// Attaches listeners to each button
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

// Evaluates a regular expression on an input
const validateWithRegEx = (regEx, inputString) => {
    return regEx.test(inputString);
}

// Generates the receipt of the purchase
const generateReceipt = () => {
    let postalRegEx = /^[a-zA-Z]\d[a-zA-Z]\s?\d[a-zA-Z]\d$/;
    let phoneRegEx = /^\(?\d{3}\)?(\s|-)\d{3}(\s|-)\d{4}$/;
    let emailRegEx = /^\w+@[a-zA-Z0-9]+.[a-zA-Z0-9]+$/;

    // Extract all the relevant values from the form
    let thisForm = document.forms["checkoutForm"];
    let name = thisForm["name"].value;
    let email = thisForm["email"].value;
    let phoneNumber = thisForm["phoneNumber"].value;
    let postalCode = thisForm["postalCode"].value; 

    // Clear the receipt area for new info
    receipt.innerHTML = "";

    // Perform validation on the form inputs
    if(name !== "" && validateWithRegEx(emailRegEx, email) && validateWithRegEx(phoneRegEx, phoneNumber) && validateWithRegEx(postalRegEx, postalCode) && cart.innerHTML !== "") {
        let successMsg = document.createElement("p");
        successMsg.textContent = "Success!";
        receipt.appendChild(successMsg);
    }
    else if(cart.innerHTML === "") {
        let cartEmptyMsg = document.createElement("p");
        cartEmptyMsg.textContent = "Shopping cart is empty.";
        receipt.appendChild(cartEmptyMsg);
    }
    else {
        let invalidInputMsg = document.createElement("p");
        invalidInputMsg.textContent = "Error: Invalid input";
        receipt.appendChild(invalidInputMsg);
    }

    return false;
}
