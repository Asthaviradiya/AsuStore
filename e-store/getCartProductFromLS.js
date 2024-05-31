export const getCartProductFromLS = () => {
    let cartProduct = localStorage.getItem("cartProductLS");
    if(!cartProduct){
        return [];
    }
    else{
    cartProduct = JSON.parse(cartProduct);
    return cartProduct;
    }
}