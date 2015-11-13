$(window).scroll(function(){
  var windowScroll = $(this).scrollTop();
  var opacity = 1-windowScroll/400;
  // console.log('windowScroll',windowScroll);
  // console.log('opacity', opacity);


  // intro
  $("#intro .wrap--outer__upperlayer").css({
    'opacity':1-windowScroll/200
  });

  // $("#intro .wrap--outer__upperlayer,#intro .wrap--outer__underlayer").css({
  //   'background-position-y'     :"-'+windowScroll/40+'%"
  // });

  $("#intro .container,#intro .svg-goDown").css({
    'transform'     :'translateY('+windowScroll/4+'%)',
    'opacity':1-windowScroll/100
  });


  // journey
  // if(windowScroll>$('#journey').offset().top - ($(window).height()/2)){
  //
  //   var journey__single = $('#journey .journey__single');
  //   journey__single.each(function(i){
  //       setTimeout(function(){
  //       journey__single.eq(i).addClass('showing');},250*(i+1));
  //   });
  // }



    var journey__single = $('#journey .journey__container>*');
    journey__single.each(function(i){
        if(windowScroll>journey__single.eq(i).offset().top - ($(window).height()/0.9)){
          journey__single.eq(i).addClass('showing');
        }else{
          journey__single.eq(i).removeClass('showing');
        }
    });



    //skills bars

    // skills percentage
    var wireframe = "98%";
    var rapid_prototype= "90%";
    var usability_test= "80%";
    var user_research= "80%";
    var statistical_analysis= "60%";
    var visual_design= "70%";
    var motion_graphics= "25%";

    var html5= "90%";
    var css3= "98%";
    var jquery= "80%";
    var gulp= "80%";
    var wordpress= "50%";
    var shopify = "40%";
    var php = "10%";
    var percentage_array=[wireframe,rapid_prototype,usability_test,user_research,statistical_analysis,visual_design,motion_graphics,html5,css3,jquery,gulp,wordpress,shopify,php];

    var bar__single = $('li .skill__bar .skill__bar_percentage');

    bar__single.each(function(i){
        var className = $this.parent().parent().attr('class');

        if(windowScroll>bar__single.eq(i).offset().top - ($(window).height())){
          bar__single.eq(i).css("width", percentage_array[i]);
        }else{
          bar__single.eq(i).css("width", '0');
        }
    });

    //portfolio
    var work__single = $('.works__all>a');
    work__single.each(function(a){
        if(windowScroll>work__single.eq(a).offset().top - ($(window).height()/0.9)){
          setTimeout(function(){
            work__single.eq(a).addClass('showing');
          },80*(a+1));
        }else{
          work__single.eq(a).removeClass('showing');
        }
    });


});
