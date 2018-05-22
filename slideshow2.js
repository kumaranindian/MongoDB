var pos = document.getElementById("slide")
var text = document.getElementById("slideshow")

counter = 1;

slideShowFunction = function(){
    if(counter <=5 ){
        
        pos.src = "image00" + counter + ".jpg"
        counter++
    }else{
        counter = 1;
    }
}

setInterval(slideShowFunction, 2000)