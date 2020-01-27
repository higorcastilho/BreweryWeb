//show-hide shopping cart

let cart = document.querySelector(".cart-icon");
let cartContainer = document.querySelector(".cart-container");
cartContainer.setAttribute("id",'remove-cartlist');

//let submenuContainer = document.querySelector('.submenu-analysis');
//submenuContainer.setAttribute("id", "makeItAbsolute");

cart.addEventListener("click", () => {
    if (cartContainer.getAttribute("id") == "remove-cartlist") {
        
        cartContainer.setAttribute("id", null);
        //submenuContainer.setAttribute("id", null);
        
    } else {
        cartContainer.setAttribute("id",'remove-cartlist');
        //submenuContainer.setAttribute("id", "makeItAbsolute");
    }
})






