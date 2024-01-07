const userHeight = document.getElementById("Height");

const userWeight = document.getElementById("Weight");

const btn = document.getElementById("btn");

const userBMI = document.getElementById("bmi-index");

btn.onclick = () => {
  const height = parseFloat(userHeight.value);
  const weight = parseFloat(userWeight.value);

  console.log(height);
  console.log(weight);

  if (height > 0) {
    const bmi = weight / (height * height);
    console.log(bmi);
    userBMI.style.display = "block";
    userBMI.innerHTML = `Your BMI Is :- <span class="bmi">${bmi.toPrecision(
      3
    )}</span>`;

    userHeight.value = "";
    userWeight.value = "";
  } else {
    alert("Please enter a valid height greater than zero.");
  }
};
