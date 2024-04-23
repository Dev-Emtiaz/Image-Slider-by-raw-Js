var img = document.querySelector("img");
var photos = ["images/1.jpg", "images/2.jpg", "images/3.jpg"];
var count = 0;

function next(){
    count++;
    if(count === 3){
        count = 0;
        img.src = photos[count];
    }
    img.src = photos[count];
}

function prev(){
    count--;
    if(count === - 1){
        count = 2;
        img.src = photos[count];
    }
    img.src = photos[count];
}