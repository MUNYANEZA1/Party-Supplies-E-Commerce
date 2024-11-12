document.getElementById('checkout-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const address = document.getElementById('address').value;
  const paymentMethod = document.getElementById('payment').value;

  if (name && address && paymentMethod) {
    alert(`Thank you for your order, ${name}!\nShipping to: ${address}\nPayment method: ${paymentMethod}`);
    localStorage.removeItem('cart'); // Clear cart after checkout
    window.location.href = '/'; // Redirect to home page
  } else {
    alert('Please fill out all fields.');
  }
});
