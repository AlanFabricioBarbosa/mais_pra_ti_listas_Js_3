const product = {
  name: 'Notebook',
  price: 29.9,
  category: 'Stationery',
  stockQuantity: 12,
};

for (const key in product) {
  const labels = {
    name: 'Nome',
    price: 'Preço',
    category: 'Categoria',
    stockQuantity: 'Quantidade em estoque',
    discount: 'Desconto',
  };

  console.log(`${labels[key]}: ${product[key]}`);
}

product.discount = 0.1;
const finalPrice = product.price * (1 - product.discount);

console.log(`Preço final com desconto: R$ ${finalPrice.toFixed(2)}`);