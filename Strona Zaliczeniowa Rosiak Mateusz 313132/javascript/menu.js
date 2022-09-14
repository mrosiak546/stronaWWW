var pozycja1 = $('.menu').offset().top;

$(window).scroll(function()){ 
    var scrol = $(window).scrolTop();
        if(scrol>pozycja1)
        {
            $('.menu').addClass('sticky');
        }
        else
        {
            $('.menu').removeClass('sticky');
        }
});