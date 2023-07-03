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
  year + "년 " + month + "월 " + date + "일 ";

//일기 작성 페이지로 이동
function goToInputPage() {
  window.location.href = "input.html";
}

//리스트 탭으로 변경
function goToListPage() {
  window.location.href = "mainList.html";
}

//화이트박스 클릭하면 수정 페이지로 이동
function onWhiteBoxClick() {
  const whiteBoxId = this.dataset.id;
  window.location.href = "check.html";
}

//로그아웃
function goToLoginPage() {
  window.location.href = "login.html";
}
