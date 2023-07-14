let inputField = document.getElementById("inputField"); // 할 일 입력창
let addbtn = document.getElementById("addbtn"); // 버튼
let toDoList = document.getElementById("toDoList"); // 할 일 리스트창

// 할 일 추가
addbtn.addEventListener("click", function () {
  if (!inputField.value) {
    alert("내용을 입력해 주세요!");
  } else {
    var li = document.createElement("li"); //부모 li

    var input = document.createElement("input"); // 체크 버튼
    input.type = "checkbox";

    var p = document.createElement("p"); // 할 일
    p.innerText = inputField.value; // 할 일 추가

    var fixbutton = document.createElement("button"); // 수정 버튼
    fixbutton.id = "fix";
    fixbutton.value = "수정";

    var delbutton = document.createElement("button"); // x 버튼
    delbutton.id = "Del";
    delbutton.value = "X";

    li.append(input, p, fixbutton, delbutton);
    document.querySelector("#toDoList").append(li);

    inputField.value = ""; // 입력창 초기화
  }
});

// 수정 기능
// input readonly 속성 사용

// 저장 기능
// input readonly 속성 사용

//
const todoDoel = todoList.filter((todo) => todo.done === true);
console.log(todoDone);
//
//
//
//
// 선택 항목 삭제
// function delSelect() {
//   var listBox = document.getElementById("listBox");
//   var checkbox = document.querySelectorAll("#listBox .checkbox"); // listBody 하위의 체크박스 모두 선택

//   for (console.log('checkbox', checked)); {
//     // i에 체크박스 인덱스 들어옴
//     if (checkbox[i].checked) {
//       listBox.removeChild(checkbox[i].parentNode); //체크박스 i번째의 부모(<td>)의 부모(<tr>) 제거
//     }
//   }
// }

// 전체선택
// let AllSelect = document.getElementById("AllSelect");

// AllSelect.addEventListener("click", function () {
//   var chks = document.querySelectorAll('input[type="checkbox"]');

//   chks.forEach((checkbox) => {
//     chks.checked = AllSelect.checked;
//   });
// });

// $("#AllSelect").click(function () {
//   var checked = $("input[type=checkbox]");

//   if ($("input:checkbox[type='AllSelect']").prop("checked", true)) {
//   } else {
//     $("input[type=checkbox]").prop("checked", false);
//   }
// });

// // 전체 삭제
// function delAllElement() {
//   var btnBox = document.getElementById("btnBox"); // btnBox 접근
//   var listChild = list.children; // btnBox 자식요소 정보가 들어옴
//   for (
//     var i = 0;
//     i < listChild.length;
//     i++ // 자식요소 개수만큼 반복하며 제거
//   ) {
//     list.removeChild(listChild[i]); // list의 자식요소 0번째, 1번째, 2번째 ... 제거
//     i--;
//   }
// }
