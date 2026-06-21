const readline = require('readline/promises');

async function main() {
  const contacts = [
    { name: 'Joao', phone: '(11) 99999-1111', email: 'joao@email.com' },
    { name: 'Maria', phone: '(21) 98888-2222', email: 'maria@email.com' },
    { name: 'Pedro', phone: '(31) 97777-3333', email: 'pedro@email.com' },
  ];

  contacts.forEach((contact) => {
    console.log(`${contact.name} | ${contact.phone} | ${contact.email}`);
  });

  const interfaceLeitura = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const searchedName = (await interfaceLeitura.question('Digite o nome do contato: ')).trim().toLowerCase();
  interfaceLeitura.close();

  for (const contact of contacts) {
    if (contact.name.toLowerCase() === searchedName) {
      console.log(`Encontrado: ${contact.name} | ${contact.phone} | ${contact.email}`);
      return;
    }
  }

  console.log('Contato não encontrado');
}

main();