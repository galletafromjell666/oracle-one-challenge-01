console.log("Hello there");

const btnEncriptar = document.querySelector(".btn.encriptar");
const btnDesencriptar = document.querySelector(".btn.desencriptar");
const loader = document.querySelector(".loader");
const textArea = document.getElementById("textarea-input");
const outputDiv = document.querySelector(".output");
const textOutput = document.getElementById("text-output");

const reset = () => {
  loader.classList.add("hidden")
  outputDiv.style.alignItems = "stretch";
  textOutput.removeChild(textOutput.firstElementChild);
  const h2element = document.createElement("h2");
  return { h2element };
};
const encriptar = () => {
  const { h2element } = reset();
  let { value } = textArea;
  let response = value
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");
  console.log(`encriptar response =\n ${response}`);
  h2element.textContent = response;
  textOutput.appendChild(h2element);
};

const desencriptar = () => {
  const { h2element } = reset();
  let { value } = textArea;
  let response = value
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");
  console.log(`desencriptar response =\n ${response}`);
  h2element.textContent = response;
  textOutput.appendChild(h2element);
};
btnEncriptar.addEventListener("click", encriptar);
btnDesencriptar.addEventListener("click", desencriptar);
