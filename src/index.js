function generatePoem(event) {
  event.preventDefault();

  alert("Generating poem...");
  let poemElement = document.querySelector("#poem");
  poemElement.innerHTML = "The tomb says to the rose of the tears with which the dawn waters you, 'If I were a rose, I would be like you, if you were a tomb.'";

//   new Typewriter("#poem", {
//     strings: "The tomb says to the rose of the tears with which the dawn waters you, 'If I were a rose, I would be like you, if you were a tomb.'",
//     autoStart: true,
//     delay: 1,
//     cursor: "",
//   });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
