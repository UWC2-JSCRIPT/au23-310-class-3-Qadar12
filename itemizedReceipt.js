// create function logReceipt that accepts menu items (1 or many) as objects
// with these properties: {descr, price}
// i.e. {descr: 'Coke', price: 1.99}
// function should log each item to the console and log a total price

const logReceipt = (...params) => {
  let subTotal = 0;
  tax = 0.1025;

  params.forEach((item) => console.log(`${item.descr} - ${item.price}`)); // grab items and prices
  params.forEach((cost) => {
    subTotal += cost.price; // grab price and add to subTotal
  });

  const taxAmount = subTotal * tax;
  const grandTotal = subTotal + taxAmount;
  console.log(`Subtotal - $${subTotal}`); // total is ouside the forEach
  console.log(`Tax - $${taxAmount.toFixed(2)}`);
  console.log(`Total - $${grandTotal.toFixed(2)}`);
};

// Check
logReceipt(
  { descr: "Burrito", price: 5.99 },
  { descr: "Chips & Salsa", price: 2.99 },
  { descr: "Sprite", price: 1.99 }
);
// should log something like:
// Burrito - $5.99
// Chips & Salsa - $2.99
// Sprite - $1.99
// Total - $10.97
