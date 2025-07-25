//quais açoes meu carrinho de comprar pode fazer

//casos de uso
//-> adicionar item no carrinho
async function addItem(userCart, item){
    userCart.push(item);
}

//-> deletar item do carrinho
async function deleteItem(userCart, name){
    const index = userCart.findIndex((item) => item.name === name);
    
    if(index !== -1){
        userCart.splice(index, 1);
    }
}


//->remover um item

async function removeItem(userCart, index) {
    const deleteIndex = index - 1;
    
    if(index >= 0 && index < userCart.length){
        userCart.splice(deleteIndex, 1);
    }
}

//->calcular total
async function calculateTotal(userCart){
    return userCart.reduce((total, item) => total + item.subtotal(), 0);
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
}