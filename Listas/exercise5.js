const monthlyBudget = {
  food: { planned: 1200, spent: 1350 },
  transport: { planned: 500, spent: 420 },
  leisure: { planned: 300, spent: 280 },
  health: { planned: 400, spent: 460 },
};

let overallBalance = 0;

for (const category in monthlyBudget) {
  const item = monthlyBudget[category];
  const balance = item.planned - item.spent;
  overallBalance += balance;

  const labels = {
    food: 'Alimentação',
    transport: 'Transporte',
    leisure: 'Lazer',
    health: 'Saúde',
  };

  const status = balance >= 0 ? 'dentro do orçamento' : 'acima do orçamento';
  console.log(`${labels[category]}: ${status} (${balance >= 0 ? '+' : ''}${balance})`);
}

console.log(`Saldo geral do mês: R$ ${overallBalance.toFixed(2)}`);