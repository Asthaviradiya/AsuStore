import { updateCartVal } from "./updateCartVal";

export const getCartProductFromLS = () => {
    let cartProduct = localStorage.getItem("cartProductLS");
    if(!cartProduct){
        return [];
    }
    else{
    cartProduct = JSON.parse(cartProduct);
    updateCartVal(cartProduct);
    return cartProduct;
    }
}