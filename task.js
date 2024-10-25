var cardContainer1 = document.getElementById("container");
let cardContainer2 = document.createElement("img");
let cardPara = document.createElement("p");
let cardSpan = document.createElement("span");
let addCart = document.createElement("button");

cardContainer2.setAttribute("src", "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba15-spacegray-config-202306?wid=840&hei=508&fmt=jpeg&qlt=90&.v=1684340991372");
cardContainer2.style.width = "350px";
cardPara.innerHTML += "Apple Macbook Air 15.3Inch Laptop M3 <br> Chip With 16GB 512GB SSD Space Gray";
cardPara.style.color = "black";
cardPara.style.transition = "color 0.5s ease";
cardSpan.textContent = "59,999/-";
addCart.innerText = "add to cart";
addCart.style.display = "block"
addCart.style.marginTop = "10px";
addCart.onclick = function(){
        alert("Item has been added to your cart!");
};


cardContainer1.style.border="2px solid black";
cardContainer1.style.borderRadius = "20px";
cardContainer1.style.padding = "10px";
cardContainer1.style.paddingBottom = "100px"
cardContainer1.style.display = "inline-block";
cardContainer1.style.backgroundColor = "whitesmoke";

cardPara.addEventListener("mouseover", function() {
    cardPara.style.color = "royalblue"; //add the mouseover event and called the function for changing the color on mouseover effect.
});

cardPara.addEventListener("mouseout", function() {
    cardPara.style.color = "black"; //add the mouseout event and called the function for changing the color on mouseout effect to come back to its original color.
});

// addCart.addEventListener("mouseover", function(){
//     addCart.style.backgroundColor = "red";
// });

// addCart.addEventListener("mouseover", function(){
//     addCart.style.backgroundColor = "white";
// });



cardContainer1.append(cardContainer2,cardPara,cardSpan,addCart);
// document.body.appendChild(cardContainer1);
