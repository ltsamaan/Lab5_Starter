// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voice_select = document.getElementById("voice-select");
  const btn = document.querySelector("button");
  const textbox = document.getElementById("text-to-speak");
  const face = document.querySelector("img");
  let voices = [];

  // Load all voices and populate the dropdown. 
  function populateVoiceList() {
    voices = synth.getVoices();
  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voice_select.appendChild(option);
    }
  }

  // Text to speak and face swap.
  btn.addEventListener('click', function() {
    const utterThis = new SpeechSynthesisUtterance(textbox.value);
    const selectedOption = voice_select.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }

    utterThis.onstart = function() {
      face.src = "assets/images/smiling-open.png";
    };

    utterThis.onend = function() {
      face.src = "assets/images/smiling.png";
    };

    synth.speak(utterThis);
  });

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
}