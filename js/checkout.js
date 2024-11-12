document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for your purchase! Your order has been completed.");
  window.location.href = "../index.html";
})