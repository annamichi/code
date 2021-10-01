$(function() {
  var slidingUp = $('.slideup, .slideupleft');
  var slidingDelay = $('.delay');
  var parallaxBg = $('.parallax-bg');
  var parallax = $('.parallax');
  // var slidingUpLeft = $('.slideupleft');
  // slidingUp.css({opactiy:'0'});
  // slidingUpLeft.animate({top: '100px',left: '-100px'}).hide();
  // console.log('done');



  $(window).scroll(function() {
    var y = $(this).scrollTop();
    //timing to add class
    //add class when offset top - 200px from this point equals y
    
    // if (y > 250 && window.innerWidth > 750) {
      // var slidingItems = $('.works-grid').children('li');
      // var slidingItems = $('.works-grid').children('li');
      // this must e the item, which is in the view (which y > kyori < kyori+window.innerHeight)

      //take the position we're in
      //it should be y 
      //check all slidingUps
      //find that one which is in the viewport (offset top -200 is < y AND offset top + window.innerHeight is > y)
      //add class



      // var kyori = slidingUp.offset().top;
      // var h = kyori+window.innerHeight + 400;
      slidingUp.each(function(i){
        var slidingItem = $(this);
        // console.log(slidingItem);
        // this must e the item, which is in the view (which y > kyori < kyori+window.innerHeight)
        var kyori = slidingItem.offset().top - 1200;
        var h = kyori+window.innerHeight + 400;
        // console.log('kyori is '+ kyori + ', to top is ' + y);
        
        if(h > y && y > kyori){
        
        // setTimeout(function() {
          // slidingItem.fadeIn();
          // slidingItem.animate(400).css({opactiy:'1'});
          
            // console.log('kyori is '+ kyori + ', to top is ' + y);
            // console.log(h);
            slidingItem.addClass('active');
            slidingDelay.addClass('delayed');
            // slidingItem.fadeIn().animate({top: '0',left: '0'});
          // }, 400*i);
          
        }
      });

      parallaxBg.each(function(i){
        var parItem = $(this);
        if(window.innerWidth < 768){
          parItem.css({
            'background-position':'top '+ y/18 +'% center'
          })
        }
      });

      parallax.each(function(i){
        var parItem = $(this);
        if(window.innerWidth < 768){
          parItem.css({
            'transform':'translateY(-'+ y/50 +'%)'
            // 'background-position':'top '+ y/18 +'% center'
          })
        }
      });
      /*
      slidingUpLeft.each(function(i){
        var slidingItem = $(this);
        // this must e the item, which is in the view (which y > kyori < kyori+window.innerHeight)
        var kyori = slidingItem.offset().top - 2000;
        var h = kyori+window.innerHeight + 400;

        if(h > y && y > kyori){
        setTimeout(function() {
          // slidingItem.fadeIn();
          // slidingItem.animate(400).css({opactiy:'1'});
          
            // console.log('kyori is '+ kyori + ', to top is ' + y);
            // console.log(h);
            slidingItem.addClass('active');
            // slidingItem.fadeIn().animate({top: '0',left: '0'});
          }, 400*i);
        }
      });
      */
    // }
/*
    if (y > 2400 && window.innerWidth > 750) {
      // var slidingItems3 = $('.about_box > li');

      slidingItems3.each(function(i){
        var slidingItem3 = $(this);
        setTimeout(function() {
          slidingItem3.addClass('slideup');
        }, 500*i);
      });
    }

    if (y > 3440 && window.innerWidth > 750) {
      // var slidingItems = $('.works-grid').children('li');
      // var slidingItems2 = $('.exp-grid').children('div');

      slidingItems2.each(function(i){
        var slidingItem2 = $(this);
        setTimeout(function() {
          slidingItem2.addClass('slideupleft');
        }, 500*i);
      });
    }

    if (y > 6050 && window.innerWidth > 750) {
      // var slidingItems = $('.works-grid').children('li');
      console.log(y);
      var slidingItems4 = $('#contact form');
      // slidingItems4.css('opacity','0','transform','translateY(100px)');

      slidingItems4.addClass('slideup');
    }
    */
  });

  function startCarousel(place){

    //take ul 
    //take all li's (opacity must be set to 0, by css)
    //and each run through the loop with 400 Timeout
    var carousel = place;
    var count = carousel.length;
    var current = 1;
    var next = 2;
    var interval = 5400;
    var duration = 1200;
    var timer;

    for (let index = 1; index < carousel.length; index++) {
      const element = carousel[index];
      element.style.display = "none";
    }

    
    // console.log("$('.fade-"+ place +" li:not(:first-child)')");

    timer = setInterval(slideTimer, interval);

    function slideTimer(){
      
      carousel.eq(current).fadeOut(duration);
      carousel.eq(next).fadeIn(duration);
      // $('.fade-1 li:nth-child(' + current + ')').fadeOut(duration);
      // $('.fade-1 li:nth-child(' + next + ')').fadeIn(duration);
      current = next;
      next = ++next;

      if(next > count) {
        next = 1;
      }
    }
  }

  setTimeout(function() {
    startCarousel($('.fade-1 li'));
  }, 100);
  setTimeout(function() {
    startCarousel($('.fade-2 li'));
  }, 500);
  setTimeout(function() {
    startCarousel($('.fade-3 li'));
  }, 900);
});

