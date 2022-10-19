
var moveXAmount=0;
var moveYAmount=0;
var isDragging=false;
var prevX = 0;
var prevY = 0;

window.onload= buildcanvas;

var buildcanvas=function () {
    var canvas= document.getElementById("canvas");
    var context= canvas.getContext("2d");
    var img= new Image();
    img.src= "https://www.techknowgram.com/tech/wp-content/uploads/2021/02/block-chain-2853054_1920.jpg";

    
    img.onload= function() {
        var im_width = parseInt(img.width);
    var im_height = parseInt(img.height);
        context.drawImage(img, -400 / 2 + moveXAmount, -550 / 2 + moveYAmount, im_width, im_height);
        // ctx.drawImage(pic_image, -400 / 2 + moveXAmount, -550 / 2 + moveYAmount, im_width, im_height);
    }

}

const mycanv= document.getElementById("canvas");
mycanv.onmousedown= function(){
    isDragging = true;
    prevX=0;
    prevY=0;
}

window.onmouseup= function(){
    isDragging = false;
    prevX=0;
    prevY=0;
}

window.onmousemove= function(event) {
    if( isDragging == true )
    {
        if( prevX>0 || prevY>0)
        {
            moveXAmount += event.pageX - prevX;
            moveYAmount += event.pageY - prevY;
            buildcanvas();
        }
        prevX = event.pageX;
        prevY = event.pageY;
    }
}