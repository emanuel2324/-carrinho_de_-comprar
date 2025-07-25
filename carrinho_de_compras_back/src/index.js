import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

const cart = [];
console.log("Welcome to the your Shopee cart!");

const item1 = await createItem("carro", 20.99, 1);
const item2 = await createItem("navio", 39.99, 1);

console.log(item2.subtotal());

// Adicionando itens ao carrinho
await cartService.addItem(cart, item1);
await cartService.addItem(cart, item2);

console.log("\nItens no carrinho:");
cart.forEach((item, index) => {
    console.log(`${index + 1}. ${item.name} - R$ ${item.price} x ${item.quantity} = R$ ${item.subtotal()}`);
});

// Calculando total do carrinho
const total = await cartService.calculateTotal(cart);
console.log(`\nTotal do carrinho: R$ ${total.toFixed(2)}`);

// Removendo um item por nome
console.log("\nRemoção do item 'carro':");
await cartService.deleteItem(cart, "carro");

console.log("Carrinho após remoção:");
cart.forEach((item, index) => {
    console.log(`${index + 1}. ${item.name} - R$ ${item.price} x ${item.quantity} = R$ ${item.subtotal()}`);
});

// Calculando novo total
const newTotal = await cartService.calculateTotal(cart);
console.log(`\nNovo total: R$ ${newTotal.toFixed(2)}`);
