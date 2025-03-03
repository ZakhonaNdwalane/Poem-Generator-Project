function displayPoem(response) {
  //   console.log("Poem Generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#user-instructions");
  let apikey = "c4d9be47o0b370b37f28te5a42babf6c";
  let context =
    "You are a romantic poem expert and love to write short poems. Your mission is to generate a 4-line poem in basic HTML. Each line must be separated by a <br/>. At the end of the poem, add the signature '<strong>SheCodes AI</strong>'. Do not include any additional text, explanations, or formatting outside of the poem and signature. The signature must be wrapped in <strong> tags to make it bold.";
  let prompt = `user instruction: Generate a poem about ${instructionInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}`;

  //   console.log("Generating a Poem");
  //   console.log(`prompt: ${prompt}`);
  //   console.log(`context: ${context}`);
  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
