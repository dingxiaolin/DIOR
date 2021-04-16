"use strict";

$(function () {
  $(".info ul").find("h3").eq(1).click(function () {
    $(".sect").css("display", "none");
    $(".selected").css({
      "display": "block"
    });
  });
  $(".selected").find("h3").eq(1).click(function () {
    $(".selected").css("display", "none");
    $(".sect").css({
      "display": "block"
    });
  }); // 手机号验证

  function checkPhone() {
    var pattern = /^1(3|4|5|6|7|8|9)\d{9}$/; //验证手机号正则表达式 

    if (!pattern.test($("#checkPhone").val())) {
      alert("手机号码不合规范,请重新输入");
      $("#checkPhone").val("");
    }
  }

  $("#checkPhone").focusout(function () {
    checkPhone();
  });
}); // 随机验证码验证

function getRandCode() {
  var randCode = "";

  for (var i = 0; i < 4; i++) {
    //限定4次
    var randNum = parseInt(Math.random() * 43 + 48);

    if (randNum >= 48 && randNum <= 57 || randNum >= 65 && randNum <= 90) {
      var _char = String.fromCharCode(randNum);

      randCode += _char;
    } else {
      i--; //只要本次循环没有拿到想要的值，就继续本次循环
    }
  }

  var oyan = document.getElementById("yanzheng");
  oyan.innerHTML = randCode;
}

getRandCode();
$("#yanzheng").click(function () {
  getRandCode();
});