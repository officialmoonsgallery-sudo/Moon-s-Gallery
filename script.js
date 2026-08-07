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
async function submitOrder() {
  const data = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    address: document.getElementById("address").value,
    area: document.getElementById("area").value,
    product: localStorage.getItem("product"),
    color: localStorage.getItem("color"),
    quantity: document.getElementById("quantity").value,
    price: localStorage.getItem("price"),
    note: document.getElementById("note").value
  };

  await fetch(SCRIPT_URL, {
    method: "POST",
    body: JSON.stringify(data)
  });

  alert("✅ Order Placed Successfully!");
      }
