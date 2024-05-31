import { updateCartVal } from "./updateCartVal";
import { getCartProductFromLS } from "./getCartProductFromLS";
export const addToCart = (event,id,stock) => {
    let arrlocalStorageProduct = getCartProductFromLS();

    const currProdElem = document.querySelector(`#card${id}`);
    let quantity = currProdElem.querySelector(".productQuantity").innerText;
    let price = currProdElem.querySelector(".productPrice").innerText;

    price = price.replace("₹", "");

    let existingProd = arrlocalStorageProduct.find((currprod) => currprod.id === id);

    if(existingProd && quantity > 1){
        quantity = Number(quantity)+Number(existingProd.quantity);
        price = Number(price*quantity);
        let updatedcart = {id,quantity,price};
        updatedcart = arrlocalStorageProduct.map((currprod) => {
            return currprod.id == id ? updatedcart : currprod;
        })
        localStorage.setItem("cartProductLS",JSON.stringify(updatedcart));

        

    }
    if(existingProd){
        
        return false;
    }
    price = Number(price*quantity);
    quantity = Number(quantity);

    arrlocalStorageProduct.push({id,quantity,price});
    localStorage.setItem("cartProductLS",JSON.stringify(arrlocalStorageProduct));

    updateCartVal(arrlocalStorageProduct);
}