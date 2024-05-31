import { getCartProductFromLS } from "./getCartProductFromLS";
export const addToCart = (event,id,stock) => {
    let arrlocalStorageProduct = getCartProductFromLS();
    const currProdElem = document.querySelector(`#card${id}`);
    let quantity = currProdElem.querySelector(".productQuantity").innerText;
    let price = currProdElem.querySelector(".productPrice").innerText;

    price = price.replace("₹", "");
    price = Number(price*quantity);
    quantity = Number(quantity);

    arrlocalStorageProduct.push({id,quantity,price});
    localStorage.setItem("cartProductLS",JSON.stringify(arrlocalStorageProduct));
}