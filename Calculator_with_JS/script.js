let text = document.getElementById("input_text");
let inputText = text.value;

let btn = document.getElementsByTagName("button");
// console.log(btn); give array of buttons

let screenValue = "";
for (item of btn) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    if (buttonText == "=") {
      text.value = eval(screenValue); 
    } else if (buttonText == "Clear All") {
      screenValue = "";
      text.value = screenValue;
    } else {
      screenValue += buttonText;
      text.value = screenValue;
    }
  });
}
