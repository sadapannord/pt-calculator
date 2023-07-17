window.onload = function () {
  var fat = "";
  var carbs = "";
  var protein = "";
  var fiber = "";
  var fatNum = 3.8889;
  var carbNum = 9.2105;
  var proteinNum = 10.9375;
  var fiberNum = 12.5;
  var submit = document.getElementById("submit");
  console.log(fat, carbs, protein, fiber);

  //on click of Submit, set values
  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    fat = document.getElementById("fat").value;
    carbs = document.getElementById("carbs").value;
    protein = document.getElementById("protein").value;
    fiber = document.getElementById("fiber").value;
    console.log(fat, carbs, protein, fiber);
    calculate(
      parseFloat(fat),
      parseFloat(carbs),
      parseFloat(protein),
      parseFloat(fiber)
    );
  });
  function calculate(fat, carbs, protein, fiber) {
    var result =
      fat / fatNum + carbs / carbNum + protein / proteinNum - fiber / fiberNum;
    console.log(result);
    var resultRound = Math.ceil(result);
    var resultShow = document.getElementById("results");
    resultShow.innerHTML = "This item is worth " + resultRound + " points";
  }
};
