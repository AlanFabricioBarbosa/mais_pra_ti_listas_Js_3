# Lista de Exercícios JavaScript 3

12 exercícios praticos em JavaScript focados em estruturas de dados e programacao orientada a objetos.

## Exercícios

### Exercício 1: Produto e Desconto
**Arquivo:** `exercise1.js`

Pratica com objetos e propriedades dinamicas. O exercício demonstra como trabalhar com um objeto produto contendo informações como nome, preço e categoria. Inclui um exemplo de adicionar propriedades dinamicamente e calcular preço com desconto.

Conceitos principais:
- Criacao de objetos
- Iteracao com for...in
- Operacoes com numeros

### Exercício 2: Comparacao de Personagens
**Arquivo:** `exercise2.js`

Trabalha com multiplos objetos para comparacao e calculo. Compara dois personagens de um jogo (Aria e Doran) atraves de suas estatísticas de vida, ataque e defesa. Determina qual personagem tem maior poder total.

Conceitos principais:
- Multiplos objetos
- Operador ternário
- Calculo de valores

### Exercício 3: Calculo de Bônus do Funcionário
**Arquivo:** `exercise3.js`

Aplicacao de logica condicional com objetos. Calcula o bônus anual de um funcionário baseado em seus anos de experiência, com diferentes taxas para cada faixa de tempo de servico.

Conceitos principais:
- Objetos com propriedades
- Condicões if/else
- Calculo de porcentagens

### Exercício 4: Inventário do Jogo com Entrada do Usuário
**Arquivo:** `exercise4.js`

Introducao a interacao com o usuario atraves de input. Simula um inventario de jogo onde o usuario pode usar itens. Requer nodejs com o modulo readline.

Conceitos principais:
- Leitura de entrada do usuario (readline)
- Operações assincroncas com async/await
- Verificacao de disponibilidade de itens

**Como executar:**
```bash
node Listas/exercise4.js
```

### Exercício 5: Rastreamento de Orçamento Mensal
**Arquivo:** `exercise5.js`

Trabalhando com objetos aninhados. Compara o orçamento planejado versus o gasto em diferentes categorias (alimentação, transporte, lazer, saúde) e calcula o saldo geral.

Conceitos principais:
- Objetos aninhados
- Iteracao em objetos
- Calculos de saldo e status

### Exercício 6: Lista de Músicas e Duracao Total
**Arquivo:** `exercise6.js`

Pratica com arrays de objetos e metodos de array. Gerencia uma playlist de musicas e calcula a duracao total, formatando os tempos em minutos e segundos.

Conceitos principais:
- Arrays de objetos
- Metodo forEach
- Formatacao de dados numericos

### Exercício 7: Filtragem de Notas de Alunos
**Arquivo:** `exercise7.js`

Processamento e filtragem de dados em arrays. Classifica alunos como aprovados (nota >= 7), em recuperacao ou reprovados (nota < 5), e calcula a media de cada grupo.

Conceitos principais:
- Filtragem de arrays
- Calculos de media
- Condicoes multiplas

### Exercício 8: Calculo de Valor Total do Estoque
**Arquivo:** `exercise8.js`

Calculo agregado com arrays de objetos. Gerencia um estoque de produtos de informatica e calcula o valor total considerando quantidade e preco unitario de cada item.

Conceitos principais:
- Arrays de objetos
- Metodo forEach
- Calculo de valores totalizados

### Exercício 9: Busca em Lista de Contatos com Entrada do Usuário
**Arquivo:** `exercise9.js`

Busca sequencial com interacao do usuario. Permite procurar um contato especifico pela nome em uma lista de contatos contendo telefone e email.

Conceitos principais:
- Busca linear em arrays
- Entrada do usuario com readline
- Comparacao case-insensitive

**Como executar:**
```bash
node Listas/exercise9.js
```

### Exercício 10: Implementacao de Pilha (Stack)
**Arquivo:** `exercise10.js`

Implementacao da estrutura de dados Pilha. Simula o historico de navegacao de um navegador onde você pode visitar paginas e voltar (operacao pop).

Conceitos principais:
- Estrutura de dados Pilha (LIFO)
- Operacoes push e pop
- Funcoes auxiliares

### Exercício 11: Implementacao de Fila (Queue)
**Arquivo:** `exercise11.js`

Implementacao da estrutura de dados Fila. Simula o sistema de atendimento em um consultorio medico onde pacientes entram em fila (push) e sao atendidos em ordem (shift).

Conceitos principais:
- Estrutura de dados Fila (FIFO)
- Operacoes push e shift
- Gerenciamento de ordens

### Exercício 12: Implementacao de Lista Ligada (Linked List)
**Arquivo:** `exercise12.js`

Implementacao de Lista Ligada. Estrutura de dados mais complexa usada para gerenciar uma lista de tarefas com adicao e remocao de elementos.

Conceitos principais:
- Estrutura de dados Lista Ligada
- Apontadores/Referências (next)
- Operacoes de insercao e remocao

## Requisitos

- Node.js (versão 14 ou superior)

## Como Executar

Para executar qualquer exercício:

```bash
node Listas/exerciseN.js
```

Substitua N pelo número do exercício desejado. Por exemplo:

```bash
node Listas/exercise1.js
node Listas/exercise2.js
```

Para exercícios que requerem entrada do usuário (4, 9):

```bash
node Listas/exercise4.js
node Listas/exercise9.js
```

## Notas de Implementacao

Alguns exercícios utilizam o modulo `readline/promises` para leitura de entrada do usuario de forma assincronica. Este modulo faz parte da biblioteca padrao do Node.js.

Os exercícios utilizam console.log para exibir resultados. Para exercícios mais avancados, funcoes auxiliares sao criadas para melhor organizacao do código.
