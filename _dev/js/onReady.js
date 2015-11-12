$( document ).ready(function() {
    setTimeout(function() {
      $('#intro').addClass('loaded');
    }, 500);

    // toggle journey details
    $( ".journey_details--toggle" ).click(function() {
      $(this).find(".journey_details--btn").toggleClass("clicked");
      $(this).siblings(".journey__details--content").slideToggle(100);
    });
});
