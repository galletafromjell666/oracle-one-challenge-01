const btnEncriptar = document.querySelector(".btn.encriptar");
const btnDesencriptar = document.querySelector(".btn.desencriptar");
const btnCopiar = document.querySelector(".btn.copiar");
const loader = document.querySelector(".loader");
const textArea = document.getElementById("textarea-input");
const outputDiv = document.querySelector(".output");
const textOutput = document.getElementById("text-output");
const responseDiv = document.querySelector(".response-container");
const modalAlerta = document.getElementById("modal-alerta");

const copyToClipboard = () => {
  const text = document.getElementById("textarea-output");
  text.select();
  navigator.clipboard.writeText(text.value);
};

const showAlert = () => {
  if (modalAlerta.classList.contains("hidden")) {
    modalAlerta.classList.remove("hidden");
    setTimeout(() => {
      modalAlerta.classList.toggle("hidden");
    }, 5000);
  }
};

const isInputCorrect = (input) => {
  if (!/^[a-z ]*$/.test(input) || input.length <= 0) return false;
  return true;
};

const clearOutput = () => {
  loader.classList.remove("hidden");
  responseDiv.classList.add("hidden");
  outputDiv.style.alignItems = "center";
};

const responseFitter = () => {
  loader.classList.add("hidden");
  responseDiv.classList.remove("hidden");
  outputDiv.style.alignItems = "stretch";
  textOutput.removeChild(textOutput.firstElementChild);
  const h2element = document.createElement("textarea");
  h2element.id = "textarea-output";
  return { h2element };
};

const encriptar = () => {
  let { value } = textArea;
  if (isInputCorrect(value)) {
    const { h2element } = responseFitter();
    let response = value
      .replaceAll("e", "enter")
      .replaceAll("i", "imes")
      .replaceAll("a", "ai")
      .replaceAll("o", "ober")
      .replaceAll("u", "ufat");
    //console.log(`encriptar response =\n ${response}`);
    h2element.value = response;
    textOutput.appendChild(h2element);
  } else {
    clearOutput();
    showAlert();
  }
};

const desencriptar = () => {
  let { value } = textArea;
  if (isInputCorrect(value)) {
    const { h2element } = responseFitter();
    let response = value
      .replaceAll("enter", "e")
      .replaceAll("imes", "i")
      .replaceAll("ai", "a")
      .replaceAll("ober", "o")
      .replaceAll("ufat", "u");
    // console.log(`desencriptar response =\n ${response}`);
    h2element.value = response;
    textOutput.appendChild(h2element);
  } else {
    clearOutput();
    showAlert();
  }
};
//
btnEncriptar.addEventListener("click", encriptar);
btnDesencriptar.addEventListener("click", desencriptar);
btnCopiar.addEventListener("click", copyToClipboard);
