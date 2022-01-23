var arr = JSON.parse(localStorage.getItem("CartItem")) || []
showMeal(arr);


function showMeal(arr){
    console.log(arr);
    arr.map(function(elem, index){
        let divCard = document.createElement("div");
        divCard.setAttribute("class", "mealCard");

        let image = document.createElement("img");
        image.setAttribute("src", elem.image);
        image.setAttribute("class", "dish-img");

        let name = document.createElement("p");
        name.textContent = `Name: ${elem.Name}`;

        let price = document.createElement("p");
        price.textContent = `Price: ${elem.Price}`;

        let btnAdd = document.createElement("button");
        btnAdd.textContent = "Proceed to Checkout";
        btnAdd.addEventListener("click", function(){
            checkOut(elem);
      })

      let btnrmv = document.createElement("button");
      btnrmv.textContent = "Remove";
      btnrmv.addEventListener("click", function(){
          remove(arr,index);
    }) 

        divCard.append(image, name, price, btnAdd, btnrmv);
        document.querySelector(".dishes").append(divCard);            

    })
}
let count = 0;
let check_arr = [];
function checkOut(elem){
    count++;
    check_arr.push(elem);
    check_arr.push(count);
    localStorage.setItem("Checkout", JSON.stringify(check_arr));
    console.log(check_arr);
    window.location.href = "/checkout.html";
    let id = setTimeout(function(){
        alert("Your order is being cooked");
       }, 8000);
}
function remove(arr, index){
    arr.splice(index, 1)
    localStorage.setItem("CartItem", JSON.stringify(arr));
}
