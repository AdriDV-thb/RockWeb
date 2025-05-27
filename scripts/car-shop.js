const cart = [];

document.addEventListener('DOMContentLoaded', () => {
    const cartIcon = document.querySelector('.cart-icon');
    const modal = document.getElementById('cart-modal');
    const closeModal = document.getElementById('close-modal');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const checkoutButton = document.getElementById('checkout');

    cartIcon.addEventListener('click', () => {
        modal.style.display = 'block';
        updateCartDisplay();
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const album = e.target.closest('.album');
            const title = album.querySelector('h3').textContent;
            const price = parseFloat(album.querySelector('.price').textContent.replace('$', ''));

            addToCart(title, price);
            updateCartCount();
            updateCartDisplay();
        });
    });

    checkoutButton.addEventListener('click', () => {
        if (cart.length > 0) {
            alert('¡Gracias por tu compra!');
            cart.length = 0;
            updateCartCount();
            updateCartDisplay();
            modal.style.display = 'none';
        }
    });
});

function addToCart(title, price) {
    const existingItem = cart.find(item => item.title === title);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ title, price, quantity: 1 });
    }
}

function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').textContent = count;
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('cart-total');
    let total = 0;

    cartItems.innerHTML = '';

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        cartItems.innerHTML += `
            <div class="cart-item">
                <span>${item.title} x${item.quantity}</span>
                <div>
                    <span>$${itemTotal.toFixed(2)}</span>
                    <button class="remove-item" data-index="${index}">❌</button>
                </div>
            </div>
        `;
    });

    totalElement.textContent = total.toFixed(2);

    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', (e) => {
            const index = parseInt(e.target.getAttribute('data-index'));
            cart.splice(index, 1);
            updateCartCount();
            updateCartDisplay();
        });
    });
}
