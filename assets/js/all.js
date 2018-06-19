$(document).ready(function(){
    $('.showmenu').on('click', function(e){
        e.preventDefault();
        $('body').toggleClass('menu-show');
    });
});

$(document).ready(function(){
    $('#about-item1').on('click', function(e){
        e.preventDefault();
        $('#about-item1').toggleClass('animated shake');
    });
});
$(document).ready(function(){
    $('#about-item2').on('click', function(e){
        e.preventDefault();
        $('#about-item2').toggleClass('animated rubberBand');
    });
});
$(document).ready(function(){
    $('#about-item3').on('click', function(e){
        e.preventDefault();
        $('#about-item3').toggleClass('animated wobble');
    });
});