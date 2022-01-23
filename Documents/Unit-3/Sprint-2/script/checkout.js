function check(){
    var add = document.getElementById("address").value;  
    localStorage.setItem("Address", JSON.stringify(add));
    window.location.href = "/thank.html"
    let id = setTimeout(function(){
        alert("Your order is ready");
       }, 10000);

}