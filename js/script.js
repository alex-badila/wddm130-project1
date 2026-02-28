let subTotal = 0, tax = 0.13, total = 0, grandTotal = 0;
let cart = document.getElementById("cart");
let receipt = document.getElementById("receipt");
let message = document.getElementById("message");
let receiptNumber = 0;

// Dynamically displays the products
const displayProducts = () => {
    let left = document.getElementById("left");
    let content = "<section>";

    // Initialize the parallel arrays
    const images = ["neuromancer.jpg", "the-matrix-dvd.jpg", "equilibrium-dvd.jpg", "mona-lisa-overdrive.jpg", "count-zero.jpg", "ghost-in-the-shell-dvd.jpg", "akira-dvd.jpg", "alita-battle-angel-dvd.jpg"];
    const names = ["Neuromancer", "The Matrix DVD", "Equilibrium DVD", "Mona Lisa Overdrive", "Count Zero", "Ghost in the Shell DVD", "Akira DVD", "Alita: Battle Angel DVD"];
    const prices = [25.99, 19.99, 29.99, 15.99, 25.99, 12.99, 26.99, 19.99]

    // Loop through the array and display its information on the page
    for(let i = 0; i < images.length; i++) {
        content += `<div class="product">`
        // Add the image
        content += `<img src="${images[i]}" height="200" width="200" alt="${names[i]}"/> `;
        // Add the product name
        content += `<h3>${names[i]}</h3>`;
        // Add the price
        content += `<p class="price">$${prices[i].toFixed(2)}</p>`;
        // Add the quantity
        content += `<label for="quantity">Quantity:</label>`;
        content += `<input type="number" id="quantity" min="0" value="0">`;
        // Add the button
        content += `<button>Buy Now</button>`;
        content += `</div>`;
    }

    content += "</section>";

    // Display the product on the page
    left.innerHTML = content;

    attachEventListeners();
}

// Attaches listeners to each button
function attachEventListeners() {
    let left = document.getElementById("left");
    
    left.addEventListener("click", function(event) {
        if (event.target.matches("button")) {
            handleClick.call(event.target);
        }
    });
}

// If button clicked, adds the relevant information to the shopping cart
function handleClick() {
    // Get the product's data from the DOM
    let productCard = this.closest('.product');
    let productName = productCard.querySelector('h3').textContent;
    let productPrice = parseFloat(productCard.querySelector('.price').textContent.replace('$', ''));
    let quantityInput = productCard.querySelector('input[type="number"]');
    let quantity = parseInt(quantityInput.value);
    
    // Validate the quantity input
    if(quantity <= 0) {
        message.textContent = "Please enter a quantity greater than 0";
        return;
    }
    else if(isNaN(quantity)) {
        message.textContent = "Please enter a number for quantity";
        return;
    }
    

    // Clear the message section when valid quantity is entered
    message.textContent = "";

    // Calculate subtotal for this item
    let itemSubtotal = productPrice * quantity;
    
    // Create cart item display
    let cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
        <h4>${productName}</h4>
        <p>${quantity} × $${productPrice.toFixed(2)}</p>
        <p class="bold">$${itemSubtotal.toFixed(2)}</p>
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
    }
    
    totalsSection.innerHTML = `
        <p class="bold">Subtotal: $${subTotal.toFixed(2)}</p>
        <p>Tax (13%): $${taxAmount.toFixed(2)}</p>
        <p class="bold">Total: $${grandTotal.toFixed(2)}</p>
    `;
    
    // Always append totals at the end (this removes it from current position and adds it to the end)
    cart.appendChild(totalsSection);
    
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
    let emailRegEx = /^\w+@[a-zA-Z0-9]+\.[a-zA-Z]+$/;

    // Extract all the relevant values from the form
    let thisForm = document.forms["checkoutForm"];
    let fullName = thisForm["fullName"].value;
    let email = thisForm["email"].value;
    let phoneNumber = thisForm["phoneNumber"].value;
    let address = thisForm["address"].value;
    let city = thisForm["city"].value;
    let province = thisForm["province"].value;
    let postalCode = thisForm["postalCode"].value; 

    // Clear the receipt area for new info
    receipt.innerHTML = "";

    // Perform validation on the form inputs
    // There is no validation for name, because it's required for the form to submit
    if(validateWithRegEx(emailRegEx, email) && validateWithRegEx(phoneRegEx, phoneNumber) && validateWithRegEx(postalRegEx, postalCode) && cart.innerHTML !== "") {
        // Display the receipt number
        receiptNumber++;
        let receiptNumberP = document.createElement("p");
        receiptNumberP.textContent = `Receipt Number: ${receiptNumber}`;
        receipt.appendChild(receiptNumberP);

        // Display the date and time
        const date = new Date();
        let dateP = document.createElement("p");
        dateP.textContent = `Date: ${date.toLocaleString('default', { month: 'long' })} ${date.getDate()}, ${date.getFullYear()}`;
        receipt.appendChild(dateP);

        let timeP = document.createElement("p");
        timeP.textContent = `Time: ${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;
        receipt.appendChild(timeP);
        
        // Add a separator or heading for customer summary
        let customerSummaryHeading = document.createElement("h3");
        customerSummaryHeading.textContent = "Customer Summary:";
        receipt.appendChild(customerSummaryHeading);

        // Display the full name of the customer
        let fullNameP = document.createElement("p");
        fullNameP.textContent = `Full Name: ${fullName}`;
        receipt.appendChild(fullNameP);

        // Display the email address of the customer
        let emailP = document.createElement("p");
        emailP.textContent = `Email Address: ${email}`;
        receipt.appendChild(emailP);

        // Display the phone number of the customer
        let phoneNumberP = document.createElement("p");
        phoneNumberP.textContent = `Phone number: ${phoneNumber}`;
        receipt.appendChild(phoneNumberP);

        // Display the address of the customer
        let addressP = document.createElement("p");
        addressP.textContent = `Address: ${address}`;
        receipt.appendChild(addressP);

        // Display the city of the customer
        let cityP = document.createElement("p");
        cityP.textContent = `City: ${city}`;
        receipt.appendChild(cityP);

        // Display the province of the customer
        let provinceP = document.createElement("p");
        provinceP.textContent = `Province: ${province}`;
        receipt.appendChild(provinceP);

        // Display the postal code of the customer
        let postalCodeP = document.createElement("p");
        postalCodeP.textContent = `Postal Code: ${postalCode}`;
        receipt.appendChild(postalCodeP);

        // Add a separator or heading for items
        let itemsHeading = document.createElement("h3");
        itemsHeading.textContent = "Items Purchased:";
        receipt.appendChild(itemsHeading);
        
        // Get all cart items (excluding the totals section)
        let cartItems = cart.querySelectorAll('.cart-item');
        
        // Loop through cart items and display them in the receipt
        cartItems.forEach(item => {
            let itemDiv = document.createElement("div");
            itemDiv.className = "receipt-item";
            
            // Clone the cart item content for the receipt
            let productName = item.querySelector('h4').textContent;
            let quantityInfo = item.querySelector('p:first-of-type').textContent;
            let itemTotal = item.querySelector('p:last-of-type').textContent;
            
            itemDiv.innerHTML = `
                <p class="bold">${productName}</p>
                <p>${quantityInfo} = ${itemTotal}</p>
            `;
            
            receipt.appendChild(itemDiv);
        });


        // Display the totals
        let subTotalP = document.createElement("p");
        subTotalP.textContent = `Subtotal: $${subTotal.toFixed(2)}`;
        receipt.appendChild(subTotalP); 

        let taxP = document.createElement("p");
        taxP.textContent = `Tax (13%): $${(subTotal * tax).toFixed(2)}`;
        receipt.appendChild(taxP); 

        let grandTotalP = document.createElement("p");
        grandTotalP.textContent = `Total: $${grandTotal.toFixed(2)}`;
        receipt.appendChild(grandTotalP);

        // Display the confirmation message
        let successMsg = document.createElement("p");
        successMsg.textContent = "Success!";
        receipt.appendChild(successMsg);

        // Clear the cart
        cart.innerHTML = "";
        subTotal = 0;
        grandTotal = 0;

        // Reset the form
        thisForm.reset();
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
