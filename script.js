let height = document.querySelector(".height");
let weight = document.querySelector(".weight");
let checkBtn = document.querySelector(".btn");
let bmiIndex = document.querySelector(".score");
let result = document.querySelector(".comment");

checkBtn.addEventListener("click", () => {
  let heightVal = height.value;
  let weightVal = weight.value;
  if (
    (heightVal === "" || isNaN(heightVal)) &&
    (weightVal === "" || isNaN(weightVal))
  ) {
    result.innerHTML = "Fields are empty";
    height.style.border = "none";
    weight.style.border = "none";
    height.style.outline = "2px solid red";
    weight.style.outline = "2px solid red";
  } else if (heightVal === "" || isNaN(heightVal)) {
    result.innerHTML = "Provide a valid Height!";
    height.style.border = "none";
    height.style.outline = "2px solid red";
  } else if (weightVal === "" || isNaN(weightVal)) {
    result.innerHTML = "Provide a valid Weight!";
    weight.style.border = "none";
    weight.style.outline = "2px solid red";
  } else {
    height.style.border = "1px solid #000";
    height.style.outline = "none";
    weight.style.border = "1px solid #000";
    weight.style.outline = "none";
    let bmi = (weightVal / ((heightVal * heightVal) / 10000)).toFixed(2);
    bmiIndex.innerHTML = bmi;
    if (bmi < 18.6) {
      result.innerHTML = "You are underweight";
    } else if (bmi >= 18.6 && bmi < 24.9) {
      result.innerHTML = "You are normal";
    } else {
      result.innerHTML = "You are overweight";
    }
  }
});
