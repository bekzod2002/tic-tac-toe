const boxes = document.querySelector(".boxes");
const boxList = document.querySelectorAll(".box");
let xCounter = 0;
let textX = "X";
if(boxList.length)
for (let i = 0; i < boxList.length; i++) {
  boxList[i].addEventListener("click", () => {
    if (boxList[i].innerText !== "") return;
    boxList[i].innerText = textX;
    if (textX === 'X') textX = 'O';
    else if (textX === 'O') textX = 'X';
    if (i == 0 || i == 1 || i == 2) {
      if (boxList[0].innerText === "X" && boxList[1].innerText === "X" && boxList[2].innerText === "X") { alert("X Win!");
boxes.style.pointerEvents = "none";}}
    if (i == 0 || i == 3 || i == 6) {
      if (boxList[0].innerText === "X" && boxList[3].innerText === "X" && boxList[6].innerText === "X") { alert("X Win!");
      boxes.style.pointerEvents = "none"}}    
    if (i == 2 || i == 5 || i == 8) {
      if (boxList[2].innerText === "X" && boxList[5].innerText === "X" && boxList[8].innerText === "X") { alert("X Win!");
      boxes.style.pointerEvents = "none"}}
    if (i == 3 || i == 4 || i == 5) {
      if (boxList[3].innerText === "X" && boxList[4].innerText === "X" && boxList[5].innerText === "X") { alert("X Win!");
      boxes.style.pointerEvents = "none"}}
    if (i == 6 || i == 7 || i == 8) {
      if (boxList[6].innerText === "X" && boxList[7].innerText === "X" && boxList[8].innerText === "X") { alert("X Win!");
      boxes.style.pointerEvents = "none"}}
    if (i == 0 || i == 4 || i == 8) {
      if (boxList[0].innerText === "X" && boxList[4].innerText === "X" && boxList[8].innerText === "X") { alert("X Win!");
      boxes.style.pointerEvents = "none"}}
    if (i == 1 || i == 4 || i == 7) {
      if (boxList[1].innerText === "X" && boxList[4].innerText === "X" && boxList[7].innerText === "X") { alert("X Win!");
      boxes.style.pointerEvents = "none"}}
    if (i == 2 || i == 4 || i == 6) {
      if (boxList[2].innerText === "X" && boxList[4].innerText === "X" && boxList[6].innerText === "X") { alert("X Win!");
      boxes.style.pointerEvents = "none"}}
      //O win!
    if (i == 0 || i == 1 || i == 2) {
      if (boxList[0].innerText === "O" && boxList[1].innerText === "O" && boxList[2].innerText === "O") {alert("O Win!");
      boxes.style.pointerEvents = "none"}}
    if (i == 0 || i == 3 || i == 6) {
      if (boxList[0].innerText === "O" && boxList[3].innerText === "O" && boxList[6].innerText === "O") { alert("O Win!");
      boxes.style.pointerEvents = "none"}}
    if (i == 2 || i == 5 || i == 8) {
      if (boxList[2].innerText === "O" && boxList[5].innerText === "O" && boxList[8].innerText === "O") {alert("O Win!");
      boxes.style.pointerEvents = "none"}}
    if (i == 3 || i == 4 || i == 5) {
      if (boxList[3].innerText === "O" && boxList[4].innerText === "O" && boxList[5].innerText === "O") { alert("O Win!");
      boxes.style.pointerEvents = "none"}}
    if (i == 6 || i == 7 || i == 8) {
      if (boxList[6].innerText === "O" && boxList[7].innerText === "O" && boxList[8].innerText === "O") {alert("O Win!");
      boxes.style.pointerEvents = "none"}}
    if (i == 0 || i == 4 || i == 8) {
      if (boxList[0].innerText === "O" && boxList[4].innerText === "O" && boxList[8].innerText === "O") { alert("O Win!");
      boxes.style.pointerEvents = "none"}}
    if (i == 1 || i == 4 || i == 7) {
      if (boxList[1].innerText === "O" && boxList[4].innerText === "O" && boxList[7].innerText === "O") {alert("O Win!");
      boxes.style.pointerEvents = "none"}}
    if (i == 2 || i == 4 || i == 6) {
      if (boxList[2].innerText === "O" && boxList[4].innerText === "O" && boxList[6].innerText === "O") {alert("O Win!");
      boxes.style.pointerEvents = "none"}}
  });
}



