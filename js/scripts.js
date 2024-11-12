import { products } from './products.js';

// Function to display products dynamically
function displayProducts(category) {
  const productContainer = document.getElementById('product-container');
  productContainer.innerHTML = ''; // Clear previous products

  const filteredProducts = category === 'All' ? products : products.filter(product => product.category === category);

  filteredProducts.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p>${product.price}</p>
      <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
    `;
    
    productContainer.appendChild(productCard);
  });
}

// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
  const cartCount = document.getElementById('cart-count');
  cartCount.innerText = cart.length;
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (product) {
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
  }
}

// Handling cart actions
document.body.addEventListener('click', (e) => {
  if (e.target.classList.contains('add-to-cart')) {
    const productId = e.target.getAttribute('data-id');
    addToCart(productId);
  }
});

// Load all products initially
displayProducts('All');

// Filter products by category
const categoryButtons = document.querySelectorAll('.category-card');
categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');
    displayProducts(category);
  });
});

// Cart icon navigation
const cartIcon = document.getElementById('cart-icon');
cartIcon.addEventListener('click', () => {
  window.location.href = '/pages/order.html'; // Navigate to order page
});

// Updating the cart count when the page loads
updateCartCount();
