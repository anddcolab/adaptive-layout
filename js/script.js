$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger,.main-menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(window).scroll(function(event) { 
    var t=$(window).scrollTop()+1;
    // console.log($(".main-banner").offset().top + $(document).scrollTop());
    // var c=$('html').outerHeight(); 
    // var p=(t/c);
    $('header').removeClass("bg-color"); 
    if ($(".banner__wrapper").offset().top - $("header").height() < t && t < $(".left-entry").height()+$(".banner__wrapper").offset().top + 20)   { 
         $('header').hide();
    } 
    else if(t > $(".left-entry").height()+$(".banner__wrapper").offset().top + 20) {
        $('header').show();
        $('header').addClass("bg-color");
    }
    else {
        $('header').show();
        console.log($(".left-entry").height())
    }
 }); 
//  5 section
$(document).ready(function(){
    $(".default_option").click(function(){
      $(this).parent().toggleClass("active");
    })

    $(".select_ul li").click(function(){
      var currentele = $(this).html();
      $(".default_option li").html(currentele);
      $(this).parents(".select_wrap").removeClass("active");
    })
});
