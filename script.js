let image = document.getElementById("image");
let btn = document.getElementsByClassName("btn");

btn[0].onclick = function(){
    image.src = "images/image1.png";
    
    Array.from(btn).forEach(function(b){
        b.classList.remove("active");
    });
    btn[0].classList.add("active");
}

btn[1].onclick = function(){
    image.src = "images/image2.png";
    
    Array.from(btn).forEach(function(b){
        b.classList.remove("active");
    });
    btn[1].classList.add("active");
}

btn[2].onclick = function(){
    image.src = "images/image3.png";
    
    Array.from(btn).forEach(function(b){
        b.classList.remove("active");
    });
    btn[2].classList.add("active");
}