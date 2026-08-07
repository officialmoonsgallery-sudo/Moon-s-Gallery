const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwIlD23H2tor2kDeYmwnuNL5ih52ry6eTM5CMhhjWdC-9SRrBh-BOVSvBy64_QmsQ2BFg/exec";
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
