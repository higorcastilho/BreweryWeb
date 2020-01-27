//show-hide shopping cart

let cart = document.querySelector(".cart-icon");
let cartContainer = document.querySelector(".cart-container");
cartContainer.setAttribute("id",'remove-cartlist');

cart.addEventListener("click", () => {
    if (cartContainer.getAttribute("id") == "remove-cartlist") {
        
        cartContainer.setAttribute("id", null);

        
    } else {
        cartContainer.setAttribute("id",'remove-cartlist');
    }
})






