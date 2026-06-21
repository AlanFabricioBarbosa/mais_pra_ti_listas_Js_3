const history = [];

function visitPage(page) {
  history.push(page);
  console.log(`Visitou: ${page}`);
  console.log(`Página atual: ${currentPage()}`);
}

function goBack() {
  history.pop();
  console.log('Voltou uma página');
  console.log(`Página atual: ${currentPage()}`);
}

function currentPage() {
  return history[history.length - 1] || 'nenhuma página';
}

visitPage('google.com');
visitPage('github.com');
visitPage('stackoverflow.com');
visitPage('openai.com');
goBack();
goBack();