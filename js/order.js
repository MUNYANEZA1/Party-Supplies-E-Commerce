//order.js

const cart = JSON.parse(localStorage.getItem('cart')) || [];
const orderContainer = document.getElementById('order-container');

function displayOrder() {
  if (cart.length === 0) {
    orderContainer.innerHTML = '<p>Your cart is empty.</p>';
    return;
  }

  orderContainer.innerHTML = cart.map(item => `
    <div class="order-item">
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>${item.price}</p>
      <p>${item.description}</p>
    </div>
  `).join('');
}

document.getElementById('checkout-button').addEventListener('click', () => {
  window.location.href = '/pages/checkout.html'; // Navigate to checkout page
});

// Display the order
displayOrder();
