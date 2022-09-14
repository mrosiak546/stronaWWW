
$(document).ready(function(){
    $('.next').on('click', function(){
        var currentImage = $('.active');
        var nextImage = currentImage.next();
  
        if(nextImage.length){
            currentImage.removeClass('active').css('z-index, -100');
            nextImage.addClass('active').css('z-index', 99);
        }
    });
  
    $('.prev').on('click', function(){ 
        var currentImage = $('.active');
        var previousImage = currentImage.prev(); 
  
        if(previousImage.length){
            currentImage.removeClass('active').css('z-index, -100');
            previousImage.addClass('active').css('z-index', 99);
        }
    });

    $('.next1').on('click', function(){ 
        var currentImage = $('.active1');
        var nextImage = currentImage.next();
  
        if(nextImage.length){
            currentImage.removeClass('active1').css('z-index, -100');
            nextImage.addClass('active1').css('z-index', 99);
        }
    });
  
    $('.prev1').on('click', function(){ 
        var currentImage = $('.active1');
        var previousImage = currentImage.prev(); 
  
        if(previousImage.length){
            currentImage.removeClass('active1').css('z-index, -100');
            previousImage.addClass('active1').css('z-index', 99);
        }
    });

    $('.next2').on('click', function(){ 
        var currentImage = $('.active2');
        var nextImage = currentImage.next();
  
        if(nextImage.length){
            currentImage.removeClass('active2').css('z-index, -100');
            nextImage.addClass('active2').css('z-index', 99);
        }
    });
  
    $('.prev2').on('click', function(){ 
        var currentImage = $('.active2');
        var previousImage = currentImage.prev(); 
  
        if(previousImage.length){
            currentImage.removeClass('active2').css('z-index, -100');
            previousImage.addClass('active2').css('z-index', 99);
        }
    });
  });