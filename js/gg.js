!function(e,a,t,n,c,o,s){e.GoogleAnalyticsObject=c,e[c]=e[c]||function(){(e[c].q=e[c].q||[]).push(arguments)},e[c].l=1*new Date,o=a.createElement(t),s=a.getElementsByTagName(t)[0],o.async=1,o.src=n,s.parentNode.insertBefore(o,s)}(window,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create","UA-36652464-2","auto"),ga("send","pageview");
$(document).ready(function(){setTimeout(function(){$("#intro").addClass("loaded")},500),$(".journey_details--toggle").click(function(){$(this).find(".journey_details--btn").toggleClass("clicked"),$(this).siblings(".journey__details--content").slideToggle(100)});var e=0,i=$(".skills_reviews_all li"),l=$(".skills_reviews_control>li");i.eq(e).fadeIn(),$(".skills_reviews_control li").eq(e).addClass("active"),l.click(function(){var e=$(this).index();i.fadeOut(200),i.eq(e).fadeIn(700),l.removeClass("active"),l.eq(e).addClass("active")})});
$(window).scroll(function(){var e=$(this).scrollTop();$("#intro .wrap--outer__upperlayer").css({opacity:1-e/200}),$("#intro .container").css({transform:"translateY("+e/4+"%)",opacity:1-e/100});var o=$("#journey .journey__container>*");o.each(function(s){e>o.eq(s).offset().top-$(window).height()/.9?o.eq(s).addClass("showing"):o.eq(s).removeClass("showing")});var s="98%",t="90%",a="80%",n="80%",i="60%",r="70%",c="25%",l="90%",h="98%",w="80%",f="80%",p="50%",_=[s,t,a,n,i,r,c,l,h,w,f,p],d=$("li .skill__bar .skill__bar_percentage");d.each(function(o){$this.parent().parent().attr("class");e>d.eq(o).offset().top-$(window).height()?d.eq(o).css("width",_[o]):d.eq(o).css("width","0")});var u=$(".works__all>a");u.each(function(o){e>u.eq(o).offset().top-$(window).height()/.9?setTimeout(function(){u.eq(o).addClass("showing")},80*(o+1)):u.eq(o).removeClass("showing")})});
$(function(){$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=$(this.hash);if(t=t.length?t:$("[name="+this.hash.slice(1)+"]"),t.length)return $("html,body").animate({scrollTop:t.offset().top},700),!1}})});var $this=$(this);
//# sourceMappingURL=../maps/gg.js.map
