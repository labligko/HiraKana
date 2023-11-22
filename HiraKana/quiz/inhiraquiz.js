//inisiasi soal dalam quiz
const questions = [
    {
        question: "Hatarakanai dalam bentuk hiragana adalah…",
        optionA: "はたらきます",
        optionB: "はたらいて",
        optionC: "はたらく",
        optionD: "はたらかない",
        correctOption: "optionD"
    },

    {
        question: "Zero-ni-san-ichi-yon-nana-hachi-go dalam bentuk angka adalah…",
        optionA: "023-14985",
        optionB: "023-14785",
        optionC: "023-14895",
        optionD: "021-29840",
        correctOption: "optionB"
    },

    {
        question: "Oyasumi nasai di gunakan pada saat seseorang ingin mengucapkan…",
        optionA: "Selamat tinggal",
        optionB: "Sampai jumpa",
        optionC: "Selamat malam",
        optionD: "Selamat tidur",
        correctOption: "optionD"
    },

    {
        question: "Ushi ditulis dalam Hiragana adalah…",
        optionA: "うか",
        optionB: "いす",
        optionC: "うし",
        optionD: "うす",
        correctOption: "optionC"
    },

    {
        question: "Kata えき di baca…",
        optionA: "Kie",
        optionB: "Koi",
        optionC: "Ike",
        optionD: "Eki",
        correctOption: "optionD"
    },

    {
        question: "selamat pagi dalam bahasa jepang…",
        optionA: "ohayou gozaimasu",
        optionB: "konichiwa",
        optionC: "konbanwa",
        optionD: "sayounara",
        correctOption: "optionA"
    },

    {
        question: "また　らいしゅうartinya adalah…",
        optionA: "Terima kasih",
        optionB: "Sampai jumpa lagi",
        optionC: "Sampai jumpa minggu depan",
        optionD: "Mohon maaf",
        correctOption: "optionC"
    },

    {
        question: "apa kabar dalam bahasa jepang…",
        optionA: "ogenki desuka",
        optionB: "konichiwa",
        optionC: "konbanwa",
        optionD: "sayounara",
        correctOption: "optionA"
    },

    {
        question: "かさ ditulis dalam romaji adalah…",
        optionA: "Kashi",
        optionB: "Tasa",
        optionC: "Kita",
        optionD: "Kasa",
        correctOption: "optionD"
    },

    {
        question: "Suika ditulis dalam huruf Hiragana adalah…",
        optionA: "せいか",
        optionB: "すうか",
        optionC: "すうき",
        optionD: "すいか",
        correctOption: "optionD"
    },

    {
        question: "Asonde dalam bentuk hiragana adalah…",
        optionA: "あそぶ",
        optionB: "あそばない",
        optionC: "あそんで",
        optionD: "あそんだ",
        correctOption: "optionC"
    },

  
    {
        question: "021-58267 dalam bahasa jepang adalah…",
        optionA: "Zero-ni-ichi-go- hachi-ni-roku-nana",
        optionB: "Zero-ni-ichi-hachi- go-roku-nana-ni",
        optionC: "Zero-ni-ichi-roku-nana-hachi-go-ni",
        optionD: "Zero-ni-ichi-roku-nana-hachi-go-yon",
        correctOption: "optionA"
    },


    {
        question: "Haruka bertemu Mitsuko pada malam hari. Ucapan salam yang di ucapkan Haruka adalah…",
        optionA: "おはよう",
        optionB: "こんにちわ",
        optionC: "こんばんわ",
        optionD: "さようなら",
        correctOption: "optionC"
    },

    {
        question: "Ani bertemu dengan kenalan baru yang bernama seito setelah perkenalan kata terakhir yang diucapkan ani adalah?",
        optionA: "Ogenki desuka",
        optionB: "Aishiteru",
        optionC: "Ganbatte kudasai",
        optionD: "Douzo yoroshiku",
        correctOption: "optionD"
    },

    {
        question: "てがみ　dibaca_________",
        optionA: "tegami",
        optionB: "resemi",
        optionC: "tekami",
        optionD: "mikasa",
        correctOption: "optionA"
    },

    {
        question: "くるま　dibaca_________",
        optionA: "buroma",
        optionB: "suroma",
        optionC: "kuruma",
        optionD: "koroma",
        correctOption: "optionC"
    },

    {
        question: "”Bukka” apabila ditulis hiragana menjadi ___________",
        optionA: "ぶっか",
        optionB: "ぶつか",
        optionC: "すっが",
        optionD: "すずが",
        correctOption: "optionA"
    },

    {
        question: "”Shashin ” apabila ditulis hiragana menjadi ___________",
        optionA: "しやしん",
        optionB: "しはしん",
        optionC: "しゃしん",
        optionD: "さっぴん",
        correctOption: "optionC"
    },

    {
        question: "”Byouin” apabila ditulis hiragana menjadi ___________",
        optionA: "びよういん",
        optionB: "ぴょういん",
        optionC: "びよいん",
        optionD: "びょいん",
        correctOption: "optionD"
    },

    {
        question: "ものさし　wa Indoneshiago de ___________desu.",
        optionA: "penggaris",
        optionB: "ball point",
        optionC: "pensil",
        optionD: "kapur",
        correctOption: "optionA"
    },

    {
        question: "ふでばこ　wa Indoneshiago de ___________desu.",
        optionA: "Tas",
        optionB: "penggaris",
        optionC: "Pensil",
        optionD: "kotak pensil",
        correctOption: "optionD"
    },

    {
        question: "かばん　wa Indoneshiago de ___________desu.",
        optionA: "Pensil",
        optionB: "Tas",
        optionC: "penggaris",
        optionD: "kotak pensil",
        correctOption: "optionB"
    },

    {
        question: "きょうかしょ　wa Indoneshiago de ___________desu.",
        optionA: "kamus",
        optionB: "buku pelajaran",
        optionC: "Buku catatan",
        optionD: "Kertas",
        correctOption: "optionB"
    },

    {
        question: "Kata yang disertakan ketika memanggil nama orang lain dewasa adalah.",
        optionA: "chan",
        optionB: "kun",
        optionC: "san",
        optionD: "desu",
        correctOption: "optionC"
    },

    {
        question: "Negara Jepang disebut_______________",
        optionA: "Chuugoku",
        optionB: "Kankouku",
        optionC: "Nihon",
        optionD: "Nihongo",
        correctOption: "optionC"
    },

    {
        question: "いしゃ adalah pekerjaan sebagai___________________",
        optionA: "pegawai bank",
        optionB: "Karyawan perusahaan",
        optionC: "guru",
        optionD: "dokter",
        correctOption: "optionD"
    },

    {
        question: "がくせい adalah seorang _____________",
        optionA: "pegawai bank",
        optionB: "pelajar",
        optionC: "guru",
        optionD: "Karyawan perusahaan",
        correctOption: "optionB"
    },

    {
        question: "Kertas wa nihongo de nan desuka._______",
        optionA: "hon desu",
        optionB: "Nooto desu",
        optionC: "kami desu",
        optionD: "Kyoukasho",
        correctOption: "optionC"
    },

    {
        question: "なまえ?",
        optionA: "Tanaka desu",
        optionB: "Kyoushi desu",
        optionC: "0298-591762 desu",
        optionD: "Nihon desu",
        correctOption: "optionA"
    },

    {
        question: "Apa yang diucapkan ketika berpisah sedangkan waktu bertemu kembali sangat lama?",
        optionA: "また あした",
        optionB: "おはよう ございます",
        optionC: "さようなら",
        optionD: "おひさしぶりですね",
        correctOption: "optionC"
    }

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions

function handleQuestions() { 
    //function to shuffle and push 25 questions to shuffledQuestions array
    while (shuffledQuestions.length <= 24) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0

let countdown; // Timer
let timeLeft = 15; // Waktu dalam detik
let currentQuestion = 1; // Soal saat ini

// function for displaying next question in the array to dom
function NextQuestion(index) {
    timeLeft = 15;
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]

    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })
   
    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
            var benarAudio = document.getElementById("benarAudio");
            benarAudio.volume=0.2;
            benarAudio.play();
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
            var salahAudio = document.getElementById("salahAudio");
            salahAudio.volume=0.2;
            salahAudio.play();
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    //delays next question displaying for a second
    setTimeout(() => {
        if (indexNumber <= 24) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

let nilai_akhir = 0;

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 7) {
        remark = "Nilai Buruk, Teruslah Berlatih."
        remarkColor = "red"
    }
    else if (playerScore >= 8 && playerScore < 18) {
        remark = "Nilai Rata-Rata, Anda bisa berbuat lebih baik."
        remarkColor = "orange"
    }
    else if (playerScore >= 18) {
        remark = "Luar biasa, Teruskan kerja bagus ini."
        remarkColor = "green"
    }
    const playerGrade = playerScore * 4
    nilai_akhir = playerGrade;

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal and resets game
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    window.location.href = `/quiz/nilaiinhira.php?playerGrade=${nilai_akhir}`;
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display="none"
}


function startTimer() {
  countdown = setInterval(function () {
    if (timeLeft === 0) {
      clearInterval(countdown);
      // Pindah ke pertanyaan berikutnya
      var skipAudio = document.getElementById("skipAudio");
      skipAudio.volume=0.2;
        skipAudio.play();
      goToNextQuestion();
      questionNumber++;
    } else {
      timeLeft--;
      document.getElementById("countdown").textContent = timeLeft;
    }
  }, 1000);
}

function goToNextQuestion() {
    handleQuestions();
    const options = document.getElementsByName("option");
    let answered = false;

    options.forEach((option) => {
        if (option.checked) {
            answered = true;
        }
    });

    if (!answered) {
        // Jika tidak ada jawaban yang dipilih, anggap sebagai jawaban salah
        wrongAttempt++;
    }
    // Ganti ini dengan logika untuk pindah ke pertanyaan berikutnya
    // Misalnya, ubah konten pertanyaan dan reset timer
    indexNumber++; // Ganti pertanyaan dengan yang berikutnya
    if (indexNumber < shuffledQuestions.length) {
      const currentQuestion = shuffledQuestions[indexNumber];
      document.getElementById("question-number").innerHTML = questionNumber
      document.getElementById("player-score").innerHTML = playerScore
      document.getElementById("display-question").textContent = currentQuestion.question;
      document.getElementById("option-one-label").textContent = currentQuestion.optionA;
      document.getElementById("option-two-label").textContent = currentQuestion.optionB;
      document.getElementById("option-three-label").textContent = currentQuestion.optionC;
      document.getElementById("option-four-label").textContent = currentQuestion.optionD;
        
      // Reset timer ke nilai awal (misalnya, 10 detik)
      timeLeft = 15;
      document.getElementById("countdown").textContent = timeLeft;
      
      // Mulai timer lagi
      startTimer();
    } else {
      // Kuis selesai, lakukan tindakan sesuai
      handleEndGame();
    }
  }
  


  
// Memulai kuis saat halaman dimuat
startTimer();   

const button = document.querySelector(".sound");
const icon = document.querySelector(".sound i");
const audio = document.querySelector("#backsound");
audio.volume = 0.05;

button.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      icon.classList.remove('fa-volume-xmark');
      icon.classList.add('fa-volume-high');
    } else {
      audio.pause();
      icon.classList.remove('fa-volume-high');
      icon.classList.add('fa-volume-xmark');
    }
  });

  function quitGame() {
    let remark = "Belum menyelesaikan quiz" 
    let remarkColor = "red"
    
    const playerGrade = playerScore * 4
    nilai_akhir = playerGrade;
    clearInterval(countdown);
    //data to display to score board
    document.getElementById("question-number1").innerHTML = questionNumber
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"
    document.getElementById('paused-modal').style.display = "none";

}

function pauseGame() {
    // nilai_akhir = playerGrade;
    clearInterval(countdown);
    questionNumber = questionNumber - 1;

    // Display the "paused-modal"
    document.getElementById('paused-modal').style.display = "flex";
}


function continueModal() {
    startTimer();
    document.getElementById('paused-modal').style.display = "none";
}