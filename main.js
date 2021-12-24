 
 var mouseEvent="empty";
 var lastpositionof_x, lastpositionof_y;
 canvas=document.getElementById("mycanvas");
 ctx=canvas.getContext("2d");

 widthofline=2;
 color="Black";

 canvas.addEvenListener("mousedown",mymousedown);
 function mymousedown(e){
     color=document.getElementById("color").value;
     widthofline=document.getElementById("widthofline").value;
     mouseEvent="mousedown";

     canvas.addEvenListener("mousemove",mymousemove);
     function mymousemove(e){
         currentpositionof_x=e.clientX-canvas.offsetLeft;
         currentpositionof_y=e.clientY-canvas.offsetTop;
    
         if (mymousEvent=="mousedown") {
             ctx.beginPath();
             ctx.strokeStyle=color;
             ctx.lineWidth=widthofline;
    
    
             console.log("lastpositionof_x and y coordinates= ");
             console.log("x="+lastpositionof_x+"y=" +currentpositionof_y);
             ctx.moveTo(currentpositionof_x,currentpositionof_y);
    
             console.log("current position of x and y coordinates=");
             console.log("x=" +currentpositionof_x+"y="+currentpositionof_y);
             ctx.lineTo(currentpositionof_x,currentpositionof_y);
             ctx.stroke();  

 }

 lastpositionof_x=currentpositionof_x;
 lastpositionof_y=currentpositionof_y;


 }


 