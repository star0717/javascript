// document = 거대한 부모객체 (전체)
// .querySelector = 태그를 찾기 위한 함수
const container = document.querySelector(".container");
//console.log(container);
const divArray = document.querySelectorAll("div");
//divArray.forEach((div) => console.log(div));
//이벤트
const cardArray = document.querySelectorAll(".namecard");
cardArray.forEach((card) => {
  card.addEventListener("click", () => {
    console.log(card);
  });
});
