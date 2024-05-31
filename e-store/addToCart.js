import { getCartProductFromLS } from "./getCartProductFromLS";
export const addToCart = (event,id,stock) => {
    let arrlocalStorageProduct = getCartProductFromLS();
    const currProdElem = document.querySelector(`#card${id}`);
    let quantity = currProdElem.querySelector(".productQuantity").innerText;
    let price = currProdElem.querySelector(".productPrice").innerText;


}