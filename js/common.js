window.addEventListener("scroll", () => {
  let pageYOffset = window.pageYOffset + 500;
  //윈도우 화면top값

  // console.log(parseInt(pageYOffset));
  //정수로만들어주기

  let updatesOffsetTop = document.querySelector("#updates").offsetTop;
  let registerOffsetTop = document.querySelector("#pre_register").offsetTop;
  let kakaoOffsetTop = document.querySelector("#kakao_event").offsetTop;

  // console.log("update:" + parseInt(updatesOffsetTop));
  // console.log("register:" + parseInt(registerOffsetTop));
  // console.log("kakao:" + parseInt(kakaoOffsetTop));
  //각 섹션의 top값

  if (pageYOffset > updatesOffsetTop) {
    document.querySelector(".content1_title").classList.add("on");
    document.querySelector(".content1_list").classList.add("on");
  } else {
    document.querySelector(".content1_title").classList.remove("on");
    document.querySelector(".content1_list").classList.remove("on");
  }
  //updatesOffsetTop fade up

  if (pageYOffset > registerOffsetTop) {
    document.querySelector(".content2_title").classList.add("on");
    document.querySelector(".content2_list").classList.add("on");
    document.querySelector(".content2_notice").classList.add("on");
  } else {
    document.querySelector(".content2_title").classList.remove("on");
    document.querySelector(".content2_list").classList.remove("on");
    document.querySelector(".content2_notice").classList.remove("on");
  }
  //registerOffsetTop fade up

  if (pageYOffset > kakaoOffsetTop) {
    document.querySelector(".content3_title").classList.add("on");
    document.querySelector(".content3_list").classList.add("on");
    document.querySelector(".content3_channel").classList.add("on");
  } else {
    document.querySelector(".content3_title").classList.remove("on");
    document.querySelector(".content3_list").classList.remove("on");
    document.querySelector(".content3_channel").classList.remove("on");
  }
  //
});

//마우스 변경
window.addEventListener("mousemove", function (event) {
  document.querySelector(".cursor").style.left = event.clientX - 16 + "px";
  document.querySelector(".cursor").style.top = event.clientY + 1 + "px";
});

//제이쿼리
$(function () {
  //main hover
  $(".btn_apply_wrap").mouseover(function () {
    $(this).addClass("on");
  });
  $(".btn_apply_wrap").mouseleave(function () {
    $(this).removeClass("on");
  });
});

$(".btn_scroll_down").click(function () {
  console.log($(this.hash));
  let thisElem = $(this.hash);
  let offsetElem = thisElem.offset();
  console.log(offsetElem.top);
  $("html,body").stop();
  $("html,body").animate({ scrollTop: offsetElem.top }, 1500);
});
