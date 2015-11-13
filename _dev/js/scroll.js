$(window).scroll(function(){
  var windowScroll = $(this).scrollTop();
  var opacity = 1-windowScroll/400;
  // console.log('windowScroll',windowScroll);
  // console.log('opacity', opacity);


  // intro
  $("#intro .wrap--outer__upperlayer").css({
    'opacity':1-windowScroll/200
  });

  $("#intro .container").css({
    'transform'     :'translate(0px, '+windowScroll/4+'%)',
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
        if(windowScroll>journey__single.eq(i).offset().top - ($(window).height()/.9)){
          journey__single.eq(i).addClass('showing');
        }else{
          journey__single.eq(i).removeClass('showing');
        }
    });



    //skills bars

    // skills percentage
    // var wireframe = "98%";
    // var rapid_prototype= "90%";
    // var usability_test= "80%";
    // var user_research= "80%";
    // var statistical_analysis= "60%";
    // var visual_design= "70%";
    // var motion_graphics= "30%";
    //
    // var html5= "90%";
    // var css3= "90%";
    // var jquery= "70%";
    // var gulp= "80%";
    // var wordpress= "50%";
    var percentage_array=['98%','90%','80%','80%','60%','70%','30%','90%','90%','70%','80%','50%'];

    var bar__single = $('li .skill__bar .skill__bar_percentage');

    bar__single.each(function(i){
        var className = $(this).parent().parent().attr('class');

        if(windowScroll>bar__single.eq(i).offset().top - ($(window).height())){
          bar__single.eq(i).css("width", percentage_array[i]);
        }else{
          bar__single.eq(i).css("width", '0');
        }
    });



});
