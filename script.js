function buy(productName, price) {
    var confirmation = confirm(`Are you sure you want to buy ${productName} for \u20B9${price.toFixed(2)}?`);
    if (confirmation) {
        alert(`Your purchase of ${productName} for \u20B9${price.toFixed(2)} has been confirmed! Thank you for shopping at KickHeadHer.`);
    }
}

function addToCart(productName, price) {
    var confirmation = confirm(`Add ${productName} to cart for ₹${price.toFixed(2)}?`);
    if (confirmation) {
        alert(`${productName} added to cart!`);
    }
}
