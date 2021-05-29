var cont=0;
function loopSlider(){
  var xx= setInterval(function(){
        switch(cont)
        {
        case 0:{
            $("#slider-1").fadeOut(400);
            $("#slider-2").fadeOut(400);
            $("#slider-3").delay(400).fadeIn(400);
            $("#sButton1").removeClass("bg-purple-800");
            $("#sButton2").removeClass("bg-purple-800");
            $("#sButton3").addClass("bg-purple-800");
        cont=1;
        
        break;
        }
        case 1:
        {
        
            $("#slider-2").fadeOut(400);
            $("#slider-3").fadeOut(400);
            $("#slider-1").delay(400).fadeIn(400);
            $("#sButton2").removeClass("bg-purple-800");
            $("#sButton3").removeClass("bg-purple-800");
            $("#sButton1").addClass("bg-purple-800");
           
        cont=2;
        
        break;
        }
        case 2:
            {
            
                $("#slider-3").fadeOut(400);
                $("#slider-1").fadeOut(400);
                $("#slider-2").delay(400).fadeIn(400);
                $("#sButton3").removeClass("bg-purple-800");
                $("#sButton1").removeClass("bg-purple-800");
                $("#sButton2").addClass("bg-purple-800");
               
            cont=0;
            
            break;
            }
        
        
        }},8000);

}

function reinitLoop(time){
clearInterval(xx);
setTimeout(loopSlider(),time);
}



function sliderButton1(){

    $("#slider-2").fadeOut(400);
    $("#slider-3").fadeOut(400);
    $("#slider-1").delay(400).fadeIn(400);
    $("#sButton2").removeClass("bg-purple-800");
    $("#sButton3").removeClass("bg-purple-800");
    $("#sButton1").addClass("bg-purple-800");
    reinitLoop(4000);
    cont=0
    
    }
    
    function sliderButton2(){
    $("#slider-3").fadeOut(400);
    $("#slider-1").fadeOut(400);
    $("#slider-2").delay(400).fadeIn(400);
    $("#sButton3").removeClass("bg-purple-800");
    $("#sButton1").removelass("bg-purple-800");
    $("#sButton2").addClass("bg-purple-800");
    reinitLoop(4000);
    cont=1
    
    }
    function sliderButton3(){
    $("#slider-1").fadeOut(400);
    $("#slider-2").fadeOut(400);
    $("#slider-3").delay(400).fadeIn(400);
    $("#sButton1").removeClass("bg-purple-800");
    $("#sButton2").removeClass("bg-purple-800");
    $("#sButton3").addClass("bg-purple-800");
    reinitLoop(4000);
    cont=2

    }  

    $(window).ready(function(){
        $("#slider-3").hide();
        $("#slider-2").hide();
        $("#sButton1").addClass("bg-purple-800");
        

        loopSlider();
    
    
    
    });