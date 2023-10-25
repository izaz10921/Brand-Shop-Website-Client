const getStoredCart = () => {
    const storedCartString = localStorage.getItem('cart');
    if (storedCartString) {
        return JSON.parse(storedCartString)
    }
    return [];
}

const saveCartToLS = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem("cart", cartStringified);
}

const addToll = id => {
    const cart = getStoredCart();
    cart.push(id);
    saveCartToLS(cart);
}

const removeFromLS = id => {
    const cart = getStoredCart();
    const remaining = cart.filter((item) => item._id !== id);
    saveCartToLS(remaining)
}



export {addToll, getStoredCart, removeFromLS };