//오늘 날짜 받아오기
let today = new Date();

let year = today.getFullYear();
let month = today.getMonth() + 1;
let date = today.getDate();
let day = today.getDay();

function getTodayLabel(num) {
  var week = new Array("일", "월", "화", "수", "목", "금", "토");
  var todayLabel = week[num];

  return todayLabel;
}
document.getElementById("date").innerHTML =
  year + "년 " + month + "월 " + date + "일 " + getTodayLabel(day) + "요일";

//저장 후 메인페이지 이동

function saveDiary() {
  window.location.href = "main.html";
  return false;
}
