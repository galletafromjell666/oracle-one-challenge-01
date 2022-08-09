console.log("Hello there");

const btnEncriptar = document.querySelector(".btn.encriptar");
const btnDesencriptar = document.querySelector(".btn.desencriptar");
const textArea = document.getElementById("textarea-input");
//console.table({btnEncriptar, btnDesencriptar})

const encriptar = () => {
  let { value } = textArea;
  let response = value
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");
  console.log(`encriptar response =\n ${response}`);
};

const desencriptar = () => {
  let { value } = textArea;
  let response = value
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");
  console.log(`desencriptar response =\n ${response}`);
};
btnEncriptar.addEventListener("click", encriptar);
btnDesencriptar.addEventListener("click", desencriptar);
