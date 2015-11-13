$( document ).ready(function() {
    setTimeout(function() {
      $('#intro').addClass('loaded');
    }, 500);

    // toggle journey details
    $( ".journey_details--toggle" ).click(function() {
      $(this).find(".journey_details--btn").toggleClass("clicked");
      $(this).siblings(".journey__details--content").slideToggle(100);
    });


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


});
