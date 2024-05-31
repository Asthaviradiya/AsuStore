const cartval = document.querySelector("#cartValue");
export const updateCartVal = (cartproducts)=>{
    return (cartval.innerHTML = `<i class="fa-solid fa-cart-shopping"> ${cartproducts.length} </i>`);
}