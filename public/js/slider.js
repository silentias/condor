$(function(){
    $('#btn-left').bind('click', function(){
        if($('.card-active').hasClass('slider__card2')){
            $('.slider__card2').removeClass('card-active');

            $('.slider__card2').toggleClass('card');
            $('.slider__card1').toggleClass('card-active');
            $('.slider__card1').removeClass('card');

            $('.slider__card2').css('order', '3');
            $('.slider__card3').css('order', '1');
            $('.slider__card1').css('order', '2');

        }
        else if($('.card-active').hasClass('slider__card1')){
            $('.slider__card1').removeClass('card-active');
            
            $('.slider__card2').css('order', '1');
            $('.slider__card3').css('order', '2');
            $('.slider__card1').css('order', '3');

            $('.slider__card1').toggleClass('card');
            $('.slider__card3').toggleClass('card-active');
            $('.slider__card3').removeClass('card');
        }
        else if($('.card-active').hasClass('slider__card3')){
            $('.slider__card3').removeClass('card-active');
            
            $('.slider__card2').css('order', '2');
            $('.slider__card3').css('order', '3');
            $('.slider__card1').css('order', '1');

            $('.slider__card3').toggleClass('card');
            $('.slider__card2').toggleClass('card-active');
            $('.slider__card2').removeClass('card');
        }
    });
    $('#btn-right').bind('click', function(){
        if($('.card-active').hasClass('slider__card2')){


            $('.slider__card2').removeClass('card-active');

            $('.slider__card2').css('order', '1');
            $('.slider__card3').css('order', '2');
            $('.slider__card1').css('order', '3');

            $('.slider__card2').toggleClass('card');
            $('.slider__card3').toggleClass('card-active');
            $('.slider__card3').removeClass('card');

        }
        else if($('.card-active').hasClass('slider__card1')){
            $('.slider__card1').removeClass('card-active');
            
            $('.slider__card2').css('order', '2');
            $('.slider__card3').css('order', '3');
            $('.slider__card1').css('order', '1');

            $('.slider__card1').toggleClass('card');
            $('.slider__card2').toggleClass('card-active');
            $('.slider__card2').removeClass('card');
        }
        else if($('.card-active').hasClass('slider__card3')){
            $('.slider__card3').removeClass('card-active');
            
            $('.slider__card2').css('order', '3');
            $('.slider__card3').css('order', '1');
            $('.slider__card1').css('order', '2');

            $('.slider__card3').toggleClass('card');
            $('.slider__card1').toggleClass('card-active');
            $('.slider__card1').removeClass('card');
        }
    });
});




