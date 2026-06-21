const products = [
  { name: 'Mouse', price: 80, quantity: 10 },
  { name: 'Keyboard', price: 150, quantity: 6 },
  { name: 'Monitor', price: 900, quantity: 3 },
];

let grandTotal = 0;

products.forEach((product) => {
  const totalValue = product.price * product.quantity;
  grandTotal += totalValue;
  console.log(`${product.name}: ${product.quantity} x R$ ${product.price.toFixed(2)} = R$ ${totalValue.toFixed(2)}`);
});

console.log(`Valor total geral do estoque: R$ ${grandTotal.toFixed(2)}`);