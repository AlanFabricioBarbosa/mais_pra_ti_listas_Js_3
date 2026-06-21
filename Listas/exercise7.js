const students = [
  { name: 'Ana', grade: 9.2 },
  { name: 'Bruno', grade: 6.8 },
  { name: 'Carla', grade: 4.5 },
  { name: 'Diego', grade: 7.5 },
  { name: 'Eva', grade: 5.8 },
  { name: 'Felipe', grade: 3.9 },
];

const approvedStudents = [];
const failedStudents = [];

for (const student of students) {
  let status = 'Recovery';

  if (student.grade >= 7) {
    status = 'Aprovado';
    approvedStudents.push(student);
  } else if (student.grade < 5) {
    status = 'Reprovado';
    failedStudents.push(student);
  }

  console.log(`${student.name}: ${status} (${student.grade})`);
}

let approvedSum = 0;
let failedSum = 0;

approvedStudents.forEach((student) => {
  approvedSum += student.grade;
});

failedStudents.forEach((student) => {
  failedSum += student.grade;
});

const approvedAverage = approvedStudents.length > 0 ? approvedSum / approvedStudents.length : 0;
const failedAverage = failedStudents.length > 0 ? failedSum / failedStudents.length : 0;

console.log(`Média dos aprovados: ${approvedAverage.toFixed(2)}`);
console.log(`Média dos reprovados: ${failedAverage.toFixed(2)}`);