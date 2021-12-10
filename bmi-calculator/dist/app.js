"use strict";
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const form = document.getElementById("main-form");
const BMIStatus = document.getElementById("status");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!(height.value && weight.value)) {
        BMIStatus.innerHTML = "please enter height and weight";
    }
    else if (height.value && height.value < 110) {
        BMIStatus.innerHTML = "please enter valid height";
    }
    else {
        const weightValue = weight.value;
        const heightValue = height.value;
        const bmi = Math.round(weightValue / (heightValue / 100 * heightValue / 100) * 10) / 10;
        let result = "Normal";
        BMIStatus.style.color = "green";
        if (bmi < 18.5) {
            result = "Underweight";
            BMIStatus.style.color = "blue";
        }
        else if (bmi > 25.0) {
            result = "Overweight";
            BMIStatus.style.color = "red";
        }
        BMIStatus.innerHTML = "<b>" + bmi.toString() + " <br> " + result + "<b>";
    }
});
