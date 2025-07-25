## objetivo
criar um carrinho de comprar baseado  no carrinho de coprar da shopee, onde o carriinho armazene itens e faça o cálculo de sub-itens automaticamante

//dominio da aplicação : carrinho de compras

//as ententidades representadas
//-> carrinho = carrinho.js# 🛒 Carrinho de Compras - Backend

## 📝 Objetivo
Criar um carrinho de compras baseado no carrinho de compras da Shopee, onde o carrinho armazene itens e faça o cálculo de sub-itens automaticamente.

## 🏗️ Domínio da Aplicação
**Carrinho de Compras**

## 🎯 Entidades Representadas
- **Carrinho** → `cart.js`
- **Itens** → `item.js`

## 📂 Estrutura do Projeto
```
carrinho_de_compras_back/
├── src/
│   ├── services/
│   │   ├── cart.js      # Serviços do carrinho
│   │   └── item.js      # Criação de itens
│   └── index.js         # Arquivo principal
├── package.json
└── README.md
```

## ⚙️ Funcionalidades

### 🛍️ Carrinho (cart.js)
- ✅ **Adicionar item** - Adiciona um novo item ao carrinho
- ✅ **Deletar item** - Remove um item específico pelo nome
- ✅ **Remover item** - Remove um item pelo índice
- ✅ **Calcular total** - Calcula o valor total do carrinho

### 📦 Item (item.js)
- ✅ **Criar item** - Cria um novo item com nome, preço e quantidade
- ✅ **Calcular subtotal** - Calcula o subtotal (preço × quantidade)

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 14 ou superior)
- NPM ou Yarn

### Instalação
```bash
# Clone o repositório (se aplicável)
git clone <url-do-repositorio>

# Navegue até a pasta
cd carrinho_de_compras_back

# Instale as dependências (se houver package.json)
npm install
```

### Execução
```bash
# Execute o projeto
node src/index.js
```

## 📋 Exemplo de Uso

```javascript
import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

// Criar itens
const item1 = await createItem("carro", 20.99, 1);
const item2 = await createItem("navio", 39.99, 1);

// Criar carrinho
const cart = [];

// Adicionar itens ao carrinho
await cartService.addItem(cart, item1);
await cartService.addItem(cart, item2);

// Calcular total
const total = await cartService.calculateTotal(cart);
console.log(`Total: R$ ${total.toFixed(2)}`);
```

## 🧪 Casos de Uso Testados

1. **Adicionar itens ao carrinho**
2. **Exibir itens do carrinho**
3. **Calcular total do carrinho**
4. **Remover item específico**
5. **Recalcular total após remoção**

## 📊 Saída Esperada
```
Welcome to the your Shopee cart!

Itens no carrinho:
1. carro - R$ 20.99 x 1 = R$ 20.99
2. navio - R$ 39.99 x 1 = R$ 39.99

Total do carrinho: R$ 60.98

Remoção do item 'carro':
Carrinho após remoção:
1. navio - R$ 39.99 x 1 = R$ 39.99

Novo total: R$ 39.99
```

## 🛠️ Tecnologias Utilizadas
- **Node.js** - Runtime JavaScript
- **ES6 Modules** - Sistema de módulos
- **JavaScript Async/Await** - Programação assíncrona

## 📝 Notas de Desenvolvimento
- Utiliza módulos ES6 (`import`/`export`)
- Funções assíncronas para simular operações de banco de dados
- Estrutura modular para facilitar manutenção
- Cálculos automáticos de subtotais e totais

---
**Desenvolvido como projeto de estudos
//->itens = item.js