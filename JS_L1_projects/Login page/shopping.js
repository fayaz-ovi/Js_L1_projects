let cart = [];

function toggleCart() {
    document.querySelector('.cart').classList.toggle('show');
}

function addToCart(productId) {
    const productElement = document.querySelector(`.product[data-id="${productId}"]`);
    const name = productElement.getAttribute('data-name');
    const price = parseFloat(productElement.getAttribute('data-price'));

    const existingProductIndex = cart.findIndex(item => item.id === productId);
    if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity += 1;
    } else {
        cart.push({ id: productId, name, price, quantity: 1 });
    }

    updateCart();
}

function removeFromCart(productId) {
    const productIndex = cart.findIndex(item => item.id === productId);
    if (productIndex !== -1) {
        cart.splice(productIndex, 1);
    }

    updateCart();
}

function updateQuantity(productId, quantity) {
    const product = cart.find(item => item.id === productId);
    if (product) {
        product.quantity += quantity;
        if (product.quantity <= 0) {
            removeFromCart(productId);
        }
    }

    updateCart();
}

function updateCart() {
    const cartItemsContainer = document.querySelector('.cart-items');
    cartItemsContainer.innerHTML = '';
    let total = 0;
    let totalCount = 0;

    cart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.innerHTML = `
            <span>${item.name} - $${item.price}</span>
            <div class="quantity-control">
                <button onclick="updateQuantity(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button onclick="updateQuantity(${item.id}, 1)">+</button>
                <button onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
        total += item.price * item.quantity;
        totalCount += item.quantity;
    });

    document.querySelector('.total').textContent = `Total: $${total.toFixed(2)}`;
    document.querySelector('.cart-count').textContent = totalCount;
}

function clearCart() {
    cart = [];
    updateCart();
}
