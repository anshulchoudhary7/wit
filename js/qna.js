// console.log(document.getElementById("a1"));
// console.log(document.querySelector("#a1"));

let Q1 = document.querySelector("#a1");
let Q2 = document.querySelector("#a2");
let Q3 = document.querySelector("#a3");
let Q4 = document.querySelector("#a4");
let Q5 = document.querySelector("#a5");
let Q6 = document.querySelector("#a6");

// let S1 = document.querySelector("#sec-1");
let S2 = document.querySelector("#sec-2");
let S3 = document.querySelector("#sec-3");
let S4 = document.querySelector("#sec-4");
let S5 = document.querySelector("#sec-5");
let S6 = document.querySelector("#sec-6");

let myForm = document.querySelector(".submitForm");

let errorMsg = document.querySelector("#warning");

myForm.addEventListener("submit", onSubmit);

window.onload = function () {
  Q1.value = 0;
};

function onSubmit(e) {
  e.preventDefault();
  if (Q1.value == 0) {
    errorMsg.innerText = "Please answer all questions before submitting.";
    setTimeout(() => (errorMsg.innerText = ""), 3000);
    return;
  }
  if (!S2.classList.contains("disappear") && Q2.value == 0) {
    errorMsg.innerText = "Please answer all questions before submitting.";
    setTimeout(() => (errorMsg.innerText = ""), 3000);
    return;
  }
  if (!S3.classList.contains("disappear") && Q3.value == 0) {
    errorMsg.innerText = "Please answer all questions before submitting.";
    setTimeout(() => (errorMsg.innerText = ""), 3000);
    return;
  }
  if (!S4.classList.contains("disappear") && Q4.value == 0) {
    errorMsg.innerText = "Please answer all questions before submitting.";
    setTimeout(() => (errorMsg.innerText = ""), 3000);
    return;
  }
  if (!S5.classList.contains("disappear") && Q5.value == 0) {
    errorMsg.innerText = "Please answer all questions before submitting.";
    setTimeout(() => (errorMsg.innerText = ""), 3000);
    return;
  }
  if (!S6.classList.contains("disappear") && Q6.value == 0) {
    errorMsg.innerText = "Please answer all questions before submitting.";
    setTimeout(() => (errorMsg.innerText = ""), 3000);
    return;
  }
  window.location.href = "answer_yes.html";
}

Q1.addEventListener("click", function () {
  let A1 = Q1.options[Q1.selectedIndex].text;
  console.log(A1);
  if (A1 === "Yes") {
    S2.classList.remove("disappear");
  } else {
    Q2.value = 0;
    Q3.value = 0;
    Q4.value = 0;
    Q5.value = 0;
    Q6.value = 0;
    S2.classList.add("disappear");
    S3.classList.add("disappear");
    S4.classList.add("disappear");
    S5.classList.add("disappear");
    S6.classList.add("disappear");
  }
});

Q2.addEventListener("click", function () {
  let A2 = Q2.options[Q2.selectedIndex].text;
  console.log(A2);
  if (A2 === "Yes") {
    S3.classList.remove("disappear");
  } else {
    Q3.value = 0;
    Q4.value = 0;
    Q5.value = 0;
    Q6.value = 0;
    S3.classList.add("disappear");
    S4.classList.add("disappear");
    S5.classList.add("disappear");
    S6.classList.add("disappear");
  }
});

Q3.addEventListener("click", function () {
  let A3 = Q3.options[Q3.selectedIndex].text;
  console.log(A3);
  if (A3 === "Yes") {
    S4.classList.remove("disappear");
  } else {
    Q4.value = 0;
    Q5.value = 0;
    Q6.value = 0;
    S4.classList.add("disappear");
    S5.classList.add("disappear");
    S6.classList.add("disappear");
  }
});

Q4.addEventListener("click", function () {
  let A4 = Q4.options[Q4.selectedIndex].text;
  console.log(A4);
  if (A4 === "Yes") {
    S5.classList.remove("disappear");
  } else {
    Q5.value = 0;
    Q6.value = 0;
    S5.classList.add("disappear");
    S6.classList.add("disappear");
  }
});

Q5.addEventListener("click", function () {
  let A5 = Q5.options[Q5.selectedIndex].text;
  console.log(A5);
  if (A5 === "Yes") {
    S6.classList.remove("disappear");
  } else {
    Q6.value = 0;
    S6.classList.add("disappear");
  }
});

Q6.addEventListener("click", function () {
  let A6 = Q6.options[Q6.selectedIndex].text;
  console.log(A6);
});
