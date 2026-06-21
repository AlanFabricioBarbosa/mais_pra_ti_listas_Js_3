const readline = require('readline/promises');

async function main() {
  const inventory = {
    sword: 1,
    potion: 5,
    shield: 2,
  };

  for (const item in inventory) {
    const labels = {
      sword: 'Espada',
      potion: 'Poção',
      shield: 'Escudo',
    };

    console.log(`${labels[item]}: ${inventory[item]}`);
  }

  const interfaceLeitura = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const itemName = (await interfaceLeitura.question('Informe um item para usar: ')).trim().toLowerCase();
  interfaceLeitura.close();

  if (!(itemName in inventory)) {
    console.log('Item não encontrado');
    return;
  }

  if (inventory[itemName] > 0) {
    inventory[itemName] -= 1;
    console.log(`Item usado: ${itemName}`);
    console.log(`Quantidade restante: ${inventory[itemName]}`);
  } else {
    console.log('item esgotado');
  }
}

main();