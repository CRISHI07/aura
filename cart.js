document.addEventListener("DOMContentLoaded", function() {
    let addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent page refresh

            // Get product details from data attributes
            let name = this.getAttribute("data-name");
            let price = parseFloat(this.getAttribute("data-price"));
            let image = this.getAttribute("data-image");

            // Retrieve cart from localStorage or create an empty array
            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            // Check if item already exists in cart
            let existingItem = cart.find(item => item.name === name);
            if (existingItem) {
                existingItem.quantity += 1;  // Increase quantity if exists
            } else {
                cart.push({ name, price, image, quantity: 1 }); // Add new item
            }

            // Save updated cart to localStorage
            localStorage.setItem("cart", JSON.stringify(cart));

            alert(`${name} has been added to your cart!`);
        });
    });
});
