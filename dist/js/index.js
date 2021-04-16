"use strict";

var today = new Date();
var tMonth = today.getMonth() + 1; //获取月份

var str;

switch (tMonth) {
  case 1:
    str = "一月";
    break;

  case 2:
    str = "二月";
    break;

  case 3:
    str = "三月";
    break;

  case 4:
    str = "四月";
    break;

  case 5:
    str = "五月";
    break;

  case 6:
    str = "六月";
    break;

  case 7:
    str = "七月";
    break;

  case 8:
    str = "八月";
    break;

  case 9:
    str = "九月";
    break;

  case 10:
    str = "十月";
    break;

  case 11:
    str = "十一月";
    break;

  default:
    str = "十二月";
}

var tDate = today.getDate(); //获取日期

tDate < 10 ? "0" + tDate : tDate;
$(".day").text(tDate);
$(".month").text(str);
$(function () {
  $(window).on('scroll', function () {
    var w = $(document).scrollTop();

    if (w > 200) {
      $(".top").show();
    } else {
      $(".top").hide();
    }
  });
  $(".sea").click(function (e) {
    $(".lie").toggle();
    e.stopPropagation();
    console.log($(".lie").attr("style") == "display: none;");

    if ($(".lie").attr("style") == "display: block;") {
      $("#icon").attr("class", "iconfont icon-xialajiantou1");
    } else {
      $("#icon").attr("class", "iconfont icon-xialajiantou");
    }
  });
  $(".func").find(".icon-yonghu").click(function () {
    $(window).attr('location', "html/login.html");
  });
  $(".jiantou").find(".zuo").click(function () {
    var width = parseInt($(".lunbotu ul").css("left"));
    width = width + 1230 + "px";
    console.log(width);

    if (width === "1230px") {
      width = "-1230px";
      $(".lunbotu ul").css({
        left: "-2460px"
      }).stop().animate({
        "left": width
      });
    } else {
      $(".lunbotu ul").stop().animate({
        "left": width
      });
    }
  });
  $(".jiantou").find(".right").click(function () {
    var left = parseInt($(".lunbotu ul").css("left"));
    left = left - 1230 + "px"; // 

    if (left === "-3690px") {
      left = "-1230px";
      $(".lunbotu ul").css({
        left: 0
      }).stop().animate({
        "left": left
      });
    } else {
      $(".lunbotu ul").stop().animate({
        "left": left
      });
    }

    console.log(left);
  });
});
var oTop = document.getElementsByClassName("top")[0];

oTop.onclick = function () {
  clearInterval(timer1);
  var timer1 = setInterval(function () {
    var w = document.documentElement.scrollTop || document.body.scrollTop;
    var ispeed = w / 8;
    ispeed = ispeed > 0 ? Math.ceil(ispeed) : Math.floor(ispeed);

    if (w == 0) {
      clearInterval(timer1);
    } else {
      document.documentElement.scrollTop = document.body.scrollTop = w - ispeed;
    }
  }, 20);
};