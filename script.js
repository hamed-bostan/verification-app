const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");

inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    const currentInput = input;
    const nextInput = input.nextElementSibling;
    const previousInput = input.previousElementSibling;

    if (currentInput.value.length > 1) {
      currentInput.value = "";
    }
    if (
      nextInput &&
      currentInput.value !== "" &&
      nextInput.hasAttribute("disabled")
    ) {
      nextInput.removeAttribute("disabled");
      nextInput.focus();
    }
    if (inputs[3].value !== "") {
      button.classList.add("active");
      return;
    }
    button.classList.remove("active");

    // backspace
    if (e.key === "Backspace") {
      previousInput.focus();
      input.setAttribute("disabled", true);
    }
  });
});

window.addEventListener("load", () => {
  inputs[0].focus();
});
