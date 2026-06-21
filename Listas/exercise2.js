const character1 = {
  name: 'Aria',
  health: 120,
  attack: 35,
  defense: 20,
};

const character2 = {
  name: 'Doran',
  health: 100,
  attack: 40,
  defense: 25,
};

console.log('Personagem 1 x Personagem 2');

for (const key in character1) {
  const labels = {
    name: 'Nome',
    health: 'Vida',
    attack: 'Ataque',
    defense: 'Defesa',
  };

  console.log(`${labels[key]}: ${character1[key]} | ${labels[key]}: ${character2[key]}`);
}

const power1 = character1.health + character1.attack + character1.defense;
const power2 = character2.health + character2.attack + character2.defense;

const winner = power1 > power2 ? character1.name : power2 > power1 ? character2.name : 'Tie';

console.log(`Poder total de ${character1.name}: ${power1}`);
console.log(`Poder total de ${character2.name}: ${power2}`);
console.log(`Resultado: ${winner}`);