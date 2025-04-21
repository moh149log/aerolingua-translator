async function translateText() {
  const inputText = document.getElementById("inputText").value;
  const language = document.getElementById("language").value;
  const resultDiv = document.getElementById("result");

  const response = await fetch("https://libretranslate.de/translate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      q: inputText,
      source: "ar",
      target: language,
      format: "text"
    })
  });

  const data = await response.json();
  resultDiv.innerText = data.translatedText;
}
