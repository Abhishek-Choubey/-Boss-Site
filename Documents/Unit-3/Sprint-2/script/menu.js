

    async function getMeal(){
       try{
        let url = `https://www.themealdb.com/api/json/v1/1/search.php?f=e`;
        let res = await fetch(url);
        let data = await res.json();
        let meal = data.meals;
        console.log(meal);
        showMeal(meal);
       }
       catch (err){
           console.log(err);
       }
    }
    getMeal();

    function showMeal(meal){
        console.log(meal);
        meal.map(function(elem){
            let divCard = document.createElement("div");
            divCard.setAttribute("class", "mealCard");

            let image = document.createElement("img");
            image.setAttribute("src", elem.strMealThumb);
            image.setAttribute("class", "dish-img");
      


            let name = document.createElement("p");
            name.textContent = `Name: ${elem.strMeal}`;
            

            let pr = Math.ceil((Math.random() * 400) + 100)
            let price = document.createElement("p");
            price.textContent =`Price: ₹${pr}`;

            let btnAdd = document.createElement("button");
            btnAdd.textContent = "Add to Cart";
            btnAdd.addEventListener("click", function(){
                addCart(elem, pr);
            })

            console.log(image, name, price, btnAdd);

            divCard.append(image, name, price, btnAdd);
            document.querySelector(".dishes").append(divCard);            
    
        })
    }
    let arr = [];
    let count = 0;
    function addCart(elem, pr){
        count++;
        let obj = {
            image : elem.strMealThumb,
            Name : elem.strMeal,
            Price : pr,
            Count : count,
        }
        arr.push(obj);
        localStorage.setItem("CartItem", JSON.stringify(arr));
        alert(`${count} meal added to cart`);
        var countDom = document.getElementById("count");
        countDom.textContent = count;

        let id = setTimeout(function(){
            alert("Your order is accepted");
           }, 3000);
       
    }
   
    
