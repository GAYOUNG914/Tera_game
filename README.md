# Tera clone coding
테라 게임 랜딩페이지를 클론코딩 해보았습니다.<br><br>
게임페이지인 만큼 animation keyframes 스킬을 조금 더 넣고, 테라 공식홈페이지에서 일러스트를 다운받아 커서와 백그라운드에 적용해 보는 등 약간의 리뉴얼을 해보았습니다.

## Link
* https://gayoung914.github.io/Tera_game/

## Tool
* HTML5
* CSS3
* Javascript
* Jquery

## Skill
* Main Contents Interaction
  - **transition을 이용한 컨텐츠 나타내기**<br>
    👉 window.pageYOffset function으로 화면의 높이를 구하고, querySelector을 이용하여 선택자를 정한뒤 offsetTop function으로 높이를 구하여 화면의 높이 수치가 선택자의 높이 수치보다 클 때 opacity값을 1로 변환시켜주는 on class 를 부여하여 화면에 섹션이 interactive하게 나타나도록 구현하였습니다. transition으로 좀더 동적으로 나타내어보았습니다.
```
window.addEventListener("scroll", () => {
  let pageYOffset = window.pageYOffset + 500;
  let updatesOffsetTop = document.querySelector("#updates").offsetTop;
  
   if (pageYOffset > updatesOffsetTop) {
    document.querySelector(".content1_title").classList.add("on");
    document.querySelector(".content1_list").classList.add("on");
  } else {
    document.querySelector(".content1_title").classList.remove("on");
    document.querySelector(".content1_list").classList.remove("on");
  }
  });
```
* Main banner Interaciton
  - **마우스 커서 변경**<br>
    👉 addEventListener 의 mousemove method를 이용하여 커서 모양을 변경시켜보았습니다.
```
window.addEventListener("mousemove", function (event) {
  document.querySelector(".cursor").style.left = event.clientX - 16 + "px";
  document.querySelector(".cursor").style.top = event.clientY + 1 + "px";
});
```

## License
Copyright © Bluehole Studio, Inc. All rights reserved.

