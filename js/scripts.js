$(document).ready(function(){
    // $('#mycarousel').carousel({interval: 200});
    $('#carouselButton').click(function(){
        if ($('#carouselButton').children('span').hasClass('fa-pause')) {
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        } else {
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });

    $('#reserveBtn').click(function(){
        $('#reserve').modal('show');
    });

    $('#loginBtn').click(function(){
        $('#loginModal').modal('show');
    });
});