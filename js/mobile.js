define([],function(){function a(e,t){document.getElementById("viewer").className="",setTimeout(function(){b.className="anm-swipe"},0),g=!0,document.ontouchstart=function(e){if("A"!=e.target.tagName)return!1}}function r(){document.getElementById("viewer-box").className="",g=!1,document.ontouchstart=function(){return!0}}var c,m,u,v,b,g=!1;return{init:function(){function e(e){return $("link.menu-list").attr(e)}var t,n,i,d,o,s,l;v=document.getElementsByClassName("slider-trigger")[0],document.body.scrollHeight,document.body.scrollWidth,document.body.scrollWidth,(t=document.createElement("div")).id="viewer",t.className="hide",c=document.getElementById("js-tagcloud"),m=document.getElementById("js-aboutme"),u=document.getElementById("js-friends"),n=c?'<span class="viewer-title">'+e("tags")+'</span><div class="viewer-div tagcloud" id="js-mobile-tagcloud"></div>':"",o=u?'<span class="viewer-title">'+e("friends")+'</span><div class="viewer-div friends" id="js-mobile-friends"></div>':"",i=m?'<span class="viewer-title">'+e("about")+'</span><div class="viewer-div aboutme" id="js-mobile-aboutme"></div>':"",t.innerHTML='<div id="viewer-box">        <div class="viewer-box-l">            <div class="viewer-box-wrap">'+i+o+n+'</div>        </div>        <div class="viewer-box-r"></div>        </div>',document.getElementsByTagName("body")[0].appendChild(t),i=document.getElementById("viewer-box"),(b=i).style.height=document.body.scrollHeight+"px",c&&(document.getElementById("js-mobile-tagcloud").innerHTML=c.innerHTML),m&&(document.getElementById("js-mobile-aboutme").innerHTML=m.innerHTML),u&&(document.getElementById("js-mobile-friends").innerHTML=u.innerHTML),document.getElementById("viewer-box").addEventListener("webkitTransitionEnd",function(){0==g&&(document.getElementById("viewer").className="hide",g=!0)},!1),v.addEventListener("touchend",function(){a()},!1),(o=document.getElementsByClassName("viewer-box-r")[0]).addEventListener("touchstart",function(){d=+new Date},!1),o.addEventListener("touchend",function(){+new Date-d<300&&r(),d=0},!1),$(".slider-trigger").click(function(){a()}),$(".viewer-box-r").click(function(){r()}),s=$("#mobile-nav .overlay"),l=$(".js-mobile-header"),window.onscroll=function(){var e=document.documentElement.scrollTop+document.body.scrollTop;69<=e?s.addClass("fixed"):s.removeClass("fixed"),160<=e?l.removeClass("hide").addClass("fixed"):l.addClass("hide").removeClass("fixed")},l[0].addEventListener("touchstart",function(){$("html, body").animate({scrollTop:0},"slow")},!1),resetTags()}}});