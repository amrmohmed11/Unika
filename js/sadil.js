const button_one = document.getElementById("one");
const button_two = document.getElementById("two");
const button_three = document.getElementById("three");
const btn = document.querySelectorAll(".buttons span");
const title = document.getElementById("title");

const we = "We have Awesome things";
const join = "Join with us";
const iAm = `I'm Unika`;

button_one.onclick = function () {
  removeAndAdd();
  title.innerHTML = we;
  this.classList.add("active");
};
button_two.onclick = function () {
  removeAndAdd();
  title.innerText = join;
  this.classList.add("active");
};
button_three.onclick = function () {
  removeAndAdd();
  title.innerHTML = iAm;
  this.classList.add("active");
};
function removeAndAdd() {
  for (i = 0; i < btn.length; i++) {
    btn[i].classList.remove("active");
  }
}
