function deliveryCharge(area){
    return area==="Dhaka"?80:150;
}

function calculateTotal(price, qty, area){
    return (price * qty) + deliveryCharge(area);
}

function buyNow(product,color,price){
    localStorage.setItem("product",product);
    localStorage.setItem("color",color);
    localStorage.setItem("price",price);

    window.location.href="order.html";
      }
function orderNow(product, color, price) {
    localStorage.setItem("product", product);
    localStorage.setItem("color", color);
    localStorage.setItem("price", price);

    window.location.href = "order.html";
}
