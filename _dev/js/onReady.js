$( document ).ready(function() {
    console.info("Hi there, I am so happy that you are intersted in my code!" +'\n'+"Any feedback? Please feel free to contact me at gg.yanyi.gong@gmail.com :D"+'\n\n');
    $('#intro').addClass('loaded');
    setTimeout(function() {
      $('#intro .wrap--outer').addClass('loaded');
    },500);

    // toggle journey details
    $( ".journey_details--toggle" ).click(function() {
      $(this).find(".journey_details--btn").toggleClass("clicked");
      $(this).siblings(".journey__details--content").slideToggle(100);
    });


    // detect iOS
    var iOS = ['iPad', 'iPhone', 'iPod'].indexOf(navigator.platform) >= 0;
    if(iOS){
      $('body').addClass('is_iOS');
    }


    // reviews rotato
    var review_eq = 0;
    var reviews_single = $(".skills_reviews_all li");
    var reviews__control_btn = $('.skills_reviews_control>li');

    reviews_single.eq(review_eq).fadeIn();

    $(".skills_reviews_control li").eq(review_eq).addClass('active');

    // setInterval(function() {
      // for (review_eq = 0; review_eq < reviews_single.length; review_eq++) {
      //
      //         reviews_single.removeClass('active');
      //         reviews_single.eq(review_eq).addClass('active');
      //         console.log(review_eq);
      //         // if(review_eq==reviews_single.length-1){
      //         //   review_eq = 0;
      //         // }
      // }
    // }, 2000);




    reviews__control_btn.click(function(){
        var i = $(this).index();

        reviews_single.fadeOut(200);
        reviews_single.eq(i).fadeIn(700);
        reviews__control_btn.removeClass('active');
        reviews__control_btn.eq(i).addClass('active');
    });



    // portfolio - Change image automatically
    // var classnameArray = [
    //   'aeip',
    //   'vcrc',
    //   'dramaticchipmunk',
    //   'cheftony',
    //   'sickflower',
    //   'vbce',
    //   'ayco',
    //   'loveforlashes',
    //   'speakEnglishin10Days'
    // ];
    // var urlArray = [
    //  '1.jpg','2.jpg','3.jpg'
    // ];

    var classname_eq=-1;
    var url_eq=0;
    var b =1;


    var $img_a = $(".works__all>a");
    $img_a.find('img').attr('src','../images/works/loading.gif');
    var $img = $(this).find('img');


    jQuery.each( $img_a, function() {
      var className = $(this).attr('class');
      var $img = $(this).find('img');

      $img.attr('src','../images/works/' +className+ '/1.jpg');
    });



    // setInterval(function(){
    //
    //   // $img.fadeOut(200,function(){
    //   //   $img.attr('src','../images/works/' +className+ '/' +urlArray[++url_eq%urlArray.length]);
    //   //   $img.fadeIn(2000);
    //   // });
    //   b++;
    //   if(b >= 3){
    //      b = 1;
    //   }
    //
    //   console.log('b',b);
    //   $img.attr('src','../images/works/' +className+ '/'+b+'.jpg');
    //   $img.fadeIn(2000);
    //
    // },4000);



});
