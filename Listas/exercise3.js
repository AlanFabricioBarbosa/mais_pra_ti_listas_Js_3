const employee = {
  name: 'Marina Souza',
  position: 'Analyst',
  salary: 5200,
  yearsOfExperience: 4,
};

for (const key in employee) {
  const labels = {
    name: 'Nome',
    position: 'Cargo',
    salary: 'Salário',
    yearsOfExperience: 'Anos de experiência',
  };

  console.log(`${labels[key]}: ${employee[key]}`);
}

let bonusRate = 0;

if (employee.yearsOfExperience <= 2) {
  bonusRate = 0.05;
} else if (employee.yearsOfExperience <= 5) {
  bonusRate = 0.1;
} else {
  bonusRate = 0.15;
}

const annualBonus = employee.salary * bonusRate;

console.log(`Bônus anual: R$ ${annualBonus.toFixed(2)}`);