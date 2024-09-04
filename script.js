const inputBox = document.getElementById("type");
const list = document.getElementById("task-container");
const btn = document.querySelector(".add");
btn.addEventListener("click", function () {
  if (type.value === "") {
    alert("Please Type Some Task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = type.value;
    list.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  type.value = "";
  saveData();
});
list.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);
function saveData() {
  localStorage.setItem("data", list.innerHTML);
}
function showData() {
  list.innerHTML = localStorage.getItem("data");
}
showData();
