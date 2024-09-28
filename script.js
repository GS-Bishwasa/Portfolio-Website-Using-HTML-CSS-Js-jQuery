$(function(){
    $('#menu').slicknav({
         label:"",
         brand:"GS Bishwasa"
    });
   
});


$(document).ready(function() {
    $('.skitter-large').skitter({
        navigation: true,
        dots: false,
        theme:"clean"
      });
  });


  $(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:60,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:false,
                loop:true
            }
        }
    })
  });

  $(function(){
    $(".progress_bar_html").animate({"width":"80%"},1000,function(){
        $(".progress_bar_css2").animate({"width":"70%"},1000,function(){
            $(".progress_bar_css3").animate({"width":"90%"},1000,function(){
                $(".progress_bar_js").animate({"width":"85%"},1000,function(){
                    $(".progress_bar_cpp").animate({"width":"90%"},1000,function(){
                        $(".progress_bar_jq").animate({"width":"60%"},1000,function(){
        
                        })
                    })
                })
            })
        })
    })
  })