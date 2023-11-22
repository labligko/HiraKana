
const fromText = document.querySelector(".from-text");
const toText = document.querySelector(".to-text");
const selectTags = document.querySelectorAll("select");
const translateBtn = document.querySelector(".translate-button");
const exchangeButton = document.querySelector(".exchange");

const countries = {
    'id-ID': 'Indonesian',
    'ja-JP': 'Japanese'
};

selectTags.forEach((tag, id) => {
    for (const country_code in countries) {
        let selected = '';
        if ((id === 0 && country_code === "id-ID") || (id === 1 && country_code === "ja-JP")) {
            selected = "selected";
        }
        const option = `<option value="${country_code}" ${selected}>${countries[country_code]}</option>`;
        tag.insertAdjacentHTML("beforeend", option);
    }
});

function swapLanguages() {
  const tempText = fromText.value;
  fromText.value = toText.value;
  toText.value = tempText;

  const tempSelectValue = selectTags[0].value;
  selectTags[0].value = selectTags[1].value;
  selectTags[1].value = tempSelectValue;
}

exchangeButton.addEventListener("click", function () {
    swapLanguages();
});


// Tambahkan event listener ke tombol translate
translateBtn.addEventListener("click", () => {
    const text = fromText.value;
    const translateFrom = selectTags[0].value;
    const translateTo = selectTags[1].value;

    // Menggunakan fetch untuk mengambil hasil terjemahan dari MyMemory API
    fetch(`https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`)
        .then((response) => response.json())
        .then((data) => {
            if (data.responseStatus === 200) {
                // Jika permintaan berhasil, menampilkan hasil terjemahan
                toText.value = data.responseData.translatedText;
            } else {
                // Jika permintaan gagal, menampilkan pesan error
                toText.value = "Terjemahan tidak tersedia.";
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            toText.value = "Terjemahan tidak tersedia.";
        });
});



function copyToClipboard(textAreaId) {
    const textToCopy = document.getElementById(textAreaId).value;
    try {
      navigator.clipboard.writeText(textToCopy);
      console.log('Content copied to clipboard');
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
    return false;
  }
  
  
  function speakText(activeTextareaId, languageCode, text) {
    const synth = window.speechSynthesis;
    var activeTextarea = document.getElementById(activeTextareaId);

    var speech = new SpeechSynthesisUtterance();
    speech.text = text;
    
    // Atur bahasa untuk sintesis suara
    speech.lang = languageCode;

    synth.speak(speech);
}

document.querySelector('.from .icons i.fa-volume-up').addEventListener('click', function() {
    const sourceLanguage = selectTags[0].value;
    const textToSpeak = fromText.value;

    if (textToSpeak) {
    speakText('text1', sourceLanguage, textToSpeak);
    console.log("Text to speak:", textToSpeak);
    }
});

document.querySelector('.to .icons i.fa-volume-up').addEventListener('click', function() {
    const targetLanguage = selectTags[1].value;
    const textToSpeak = toText.value;

    if (textToSpeak) {
    speakText('text2', targetLanguage, textToSpeak);
    console.log("Text to speak:", textToSpeak);
    }
});

