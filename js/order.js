document.addEventListener("DOMContentLoaded", () => {
  
  //Example order items (in a real application, retrive this from local storage or a database)
  const orderItems = [
    { name: "Party Balloons", price: "$12.99", quantity: 2 },
    { name: "Tableware set", price: '$25.99', quantity: 1 }
  ];

  orderItems.forEach(item =>{
    const orderItem = document.createElement("div");
    orderItem.classList.add("order-item");
    orderItem.innerHTML = `<p>${item.name} - ${item.price} x ${item.quantity}</p>`;
    orderItemsContainer.appendChild(orderItem);
  });
});