$(document).ready(function () {
 
    
    // sticky navigation menu
    
    let nav_offset_top = $('.header_area').height() + 30;

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }


    navbarFixed();
});

function loadSkillgraph() {
    $(".skillData").each(function(index, element) {
        // element == this
        var mydata = $(element).data();
        var cnt = 0;
    
        //recursive call with a time delay so user can see graph draw.
        function go() {
            if (cnt++ < mydata['percent']) {
                setTimeout(go, 10);
            }
            $(element).css('width', cnt + '%');
    
        }
    
        go();
    
    });
    
    }
    
    loadSkillgraph();

