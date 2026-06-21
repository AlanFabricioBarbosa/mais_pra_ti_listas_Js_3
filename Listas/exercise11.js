const queue = [];

function enqueuePatient(name) {
  queue.push(name);
  console.log(`Chegou: ${name}`);
  displayQueue();
}

function dequeuePatient() {
  const patient = queue.shift();
  console.log(patient ? `Chamando: ${patient}` : 'Fila vazia');
  displayQueue();
}

function displayQueue() {
  console.log(`Fila: ${queue.length > 0 ? queue.join(' -> ') : 'vazia'}`);
}

enqueuePatient('Ana');
enqueuePatient('Bruno');
enqueuePatient('Carla');
enqueuePatient('Diego');
enqueuePatient('Eva');

dequeuePatient();
dequeuePatient();
dequeuePatient();