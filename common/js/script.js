$(function() {
  //スムーズスクロール
  $('a[href^="#"]').click(function() {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - 100;
    $("html, body").animate(
      {
        scrollTop: position
      },
      speed,
      "swing"
    );
    return false;
  });

  //Contact Form Labels
  /*
  &:focus, &:active
  label
    top: 0px
    left: 8px
    transform: scale(.5)
    */
  // $('#contact .field').click(function() {
  //   $(this).children('label').css('top: 0, left: 8px, transform: scale(.5)');
  //   console.log('hi');
  // });


  $(".totop").click(function() {
    $("html,body").animate({ scrollTop: 0 }, 300);
  });
  //上に戻るボタンとその行動
  $(".totop").hide();

  // $(window).scroll(function() {
    // var y = $(this).scrollTop();

  //   if (y > 2600 && window.innerWidth > 750) {
  //     $(".totop").fadeIn();
  //   } else {
  //     $(".totop").fadeOut();
  //   }

    //works images
    // if (y > 250 && window.innerWidth > 750) {
      
    //   $("#works .works-grid li").addClass('slideup');

  //     //   // $(this).delay( 800 * index).addClass("animated");
  //     //   console.log($(this));
      // });

  //     var speed = 500;

  //     // init timer and stores it's identifier so it can be unset later
  //     var timer = setInterval(replaceArticle, speed);

  //     var articles =  $('#works .works-grid li');
      
  //     // var length = articles.length;

  //     var index = 0;
  //     function replaceArticle() {
  //         articles.eq(index).addClass("animated");

  //         index++;

  //         // remove timer after interating through all articles
  //         if (index >= articles.length) {
  //             clearInterval(timer);
  //         }
  //     }
    
    // }

  //   if (y > 3440 && window.innerWidth > 750) {
  //     var speed2 = 1000;

  //     // init timer and stores it's identifier so it can be unset later
  //     var timer2 = setInterval(replaceArticle2, speed2);

  //     var expGrids = $('.exp-grid > div');
      
  //     // var length = articles.length;

  //     i = 0;
  //     function replaceArticle2() {
  //       expGrids.eq(i).addClass("animated");

  //         i++;

  //         // remove timer after interating through all articles
  //         if (i >= expGrids.length) {
  //             clearInterval(timer2);
  //         }
  //     }
    
  //   }
    
  // });


  //Show Site Caption
  $('.caption').hide();
  
  $(".about_box > li").hover(
    function() {
      $(this)
        .children(".blackscreen")
        .css("opacity", ".7");
      $(this)
        .children(".caption").stop()
        .fadeIn(500);
        // .css("transform", "translateY(-28px)");
    },
    function() {
      $(this)
        .children(".blackscreen")
        .css("opacity", "0");
      $(this)
        .children(".caption").stop()
        .fadeOut()
        // .css("transform", "translateY(0px)");
    }
  );

  //Mobile Nav
  if (window.innerWidth < 769) {
    // $("nav").hide();
    
      $(".sp-menu-btn").click(function() {
        // $("nav").fadeIn();
        $("nav").addClass("opened");
        // $(this).hide();
      });
    
      function closeMenu() {
        $("nav").removeClass("opened");
        // $("nav").fadeOut();
        // $(".sp-menu-btn")
        //   .delay(500)
        //   .fadeIn();
      }
    
      $("nav").click(function() {
        if (window.innerWidth < 769) {
          closeMenu();
        }
      });
      $("main").click(function() {
        if (window.innerWidth < 769) {
          closeMenu();
        }
      });
      $("nav ul li a").click(function() {
        if (window.innerWidth < 769) {
          closeMenu();
        }
      });

  }
});

//http://www.electric-fruits.com/creator-blog/fullpage-js-memo-201507/
