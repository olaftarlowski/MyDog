$(".scale-img-onclick").each(function(){
    $(this).click(function(){
      console.log($(this));  
        if($(this).hasClass('enlarged')){
            $(this).removeClass('enlarged');
            $(this).stop().animate({width: 280, height: 187}, 200);
        }else{
            $(this).addClass('enlarged');
            $(this).stop().animate({width: 800, height: 533}, 200);
        }
        
    })
});

