var today = new Date();
var tMonth = today.getMonth() + 1;  //获取月份
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
var tDate = today.getDate();  //获取日期
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
    })
})
let oTop = document.getElementsByClassName("top")[0];
oTop.onclick = function () {
    let w = document.documentElement.scrollTop || document.body.scrollTop;
    clearInterval(timer1);
    var timer1 = setInterval(() => {



    }, 400);
}




