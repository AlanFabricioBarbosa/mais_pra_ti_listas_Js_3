function createNode(value) {
  return { value, next: null };
}

let head = null;

function addTask(task) {
  const newNode = createNode(task);

  if (head === null) {
    head = newNode;
    return;
  }

  let current = head;
  while (current.next !== null) {
    current = current.next;
  }

  current.next = newNode;
}

function removeTask(task) {
  if (head === null) {
    return;
  }

  if (head.value === task) {
    head = head.next;
    return;
  }

  let current = head;
  while (current.next !== null && current.next.value !== task) {
    current = current.next;
  }

  if (current.next !== null) {
    current.next = current.next.next;
  }
}

function displayList() {
  const tasks = [];
  let current = head;

  while (current !== null) {
    tasks.push(current.value);
    current = current.next;
  }

  console.log(tasks.length > 0 ? tasks.join(' -> ') : 'lista vazia');
}

addTask('Study');
addTask('Train');
addTask('Read');
addTask('Rest');

console.log('Antes de remover:');
displayList();

removeTask('Read');

console.log('Depois de remover:');
displayList();