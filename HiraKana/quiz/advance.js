//inisiasi soal dalam quiz
const questions = [
    {
        question: "本 (buku)",
        optionA: "はん",
        optionB: "ほん",
        optionC: "ぼん",
        optionD: "ぽん",
        correctOption: "optionB"
    },

    {
        question: "大学 (universitas)",
        optionA: "たいがく",
        optionB: "だいかぐ",
        optionC: "だいがっこう",
        optionD: "だいがく",
        correctOption: "optionD"
    },

    {
        question: "図書館 (perpustakaan)",
        optionA: "とうしょかん",
        optionB: "としょうかん",
        optionC: "としょかん",
        optionD: "とうしょうかん",
        correctOption: "optionC"
    },

    {
        question: "会社 (kantor)",
        optionA: "かいしゃ",
        optionB: "かいさ",
        optionC: "かいしゃあ",
        optionD: "がいしゃ",
        correctOption: "optionA"
    },

    {
        question: "砂糖 (gula pasir)",
        optionA: "しお",
        optionB: "さと",
        optionC: "こしょう",
        optionD: "さとう",
        correctOption: "optionD"
    },

    {
        question: "冷蔵庫 (kulkas)",
        optionA: "れぞうこ",
        optionB: "れいぞうこ",
        optionC: "れいぞこ",
        optionD: "れぞこ",
        correctOption: "optionB"
    },

    {
        question: "時計 (jam)",
        optionA: "とうけい",
        optionB: "とうけ",
        optionC: "とけい",
        optionD: "とけ",
        correctOption: "optionC"
    },

    {
        question: "先生 (guru, pengajar)",
        optionA: "せんせい",
        optionB: "せいんせ",
        optionC: "せんせえ",
        optionD: "せんせ",
        correctOption: "optionA"
    },

    {
        question: "学生 (pelajar)",
        optionA: "がっこせ",
        optionB: "がくせ",
        optionC: "がっこせい",
        optionD: "がくせい",
        correctOption: "optionD"
    },

    {
        question: "紙 (kertas)",
        optionA: "がみ",
        optionB: "かみ",
        optionC: "てがみ",
        optionD: "きって",
        correctOption: "optionB"
    },

    {
        question: "医者 (dokter)",
        optionA: "いさ",
        optionB: "いさゃ",
        optionC: "いしゃ",
        optionD: "いしや",
        correctOption: "optionC"
    },

    {
        question: "東 (timur)",
        optionA: "ひがし",
        optionB: "きた",
        optionC: "にし",
        optionD: "みなみ",
        correctOption: "optionA"
    },

    {
        question: "西 (barat)",
        optionA: "みなみ",
        optionB: "きた",
        optionC: "ひがし",
        optionD: "にし",
        correctOption: "optionD"
    },

    {
        question: "北 (utara)",
        optionA: "みなみ",
        optionB: "きた",
        optionC: "にし",
        optionD: "ひがし",
        correctOption: "optionB"
    },

    {
        question: "南 (selatan)",
        optionA: "きた",
        optionB: "しがし",
        optionC: "まなみ",
        optionD: "にし",
        correctOption: "optionC"
    },

    {
        question: "今日は　<u>体</u>の　調子が　あまり　よくないです。",
        optionA: "からだ",
        optionB: "あたま",
        optionC: "あし",
        optionD: "て",
        correctOption: "optionA"
    },

    {
        question: "その　ニュースを　聞いて　たいへん　<u>安心</u>　しました。",
        optionA: "あんみん",
        optionB: "あんちん",
        optionC: "あんじん",
        optionD: "あんしん",
        correctOption: "optionD"
    },

    {
        question: "彼は　彼女の　<u>耳</u>に　何か　ささやいた。",
        optionA: "め",
        optionB: "みみ",
        optionC: "くび",
        optionD: "かお",
        correctOption: "optionB"
    },

    {
        question: "彼女は　<u>目標</u>を　たっせい　しました。",
        optionA: "もぐひょう",
        optionB: "ぼぐひょう",
        optionC: "もくひょう",
        optionD: "ぼくひょう",
        correctOption: "optionC"
    },

    {
        question: "私たちは　パーティーを　して　<u>新年</u>を　いわいました。",
        optionA: "しんねん",
        optionB: "まいとし",
        optionC: "ことし",
        optionD: "きょねん",
        correctOption: "optionA"
    },

    {
        question: "部屋が　寒かったので、　ストーブに　<u>火</u>を　つけました。",
        optionA: "み",
        optionB: "ふ",
        optionC: "か",
        optionD: "ひ",
        correctOption: "optionD"
    },

    {
        question: "<u>月</u>は　ちきゅうの　周りを　回転　しています。",
        optionA: "つぐ",
        optionB: "つき",
        optionC: "つく",
        optionD: "つぎ",
        correctOption: "optionB"
    },

    {
        question: "どんな　ことが　起こっても　<u>こころ</u>を　変えません",
        optionA: "火",
        optionB: "必",
        optionC: "心",
        optionD: "忘",
        correctOption: "optionC"
    },

    {
        question: "寝<u>たりない</u>　ので、　今日は　早めに　寝ます。",
        optionA: "足りない",
        optionB: "手りない",
        optionC: "頭りない",
        optionD: "口りない",
        correctOption: "optionA"
    },

    {
        question: "パリは　フランスの　<u>しゅと</u>です。",
        optionA: "白都",
        optionB: "頭都",
        optionC: "道都",
        optionD: "首都",
        correctOption: "optionD"
    },

    {
        question: "彼女は　その　けっかを　知って　<u>まんぞく</u>　しました。",
        optionA: "満促",
        optionB: "満足",
        optionC: "満走",
        optionD: "満定",
        correctOption: "optionB"
    },

    {
        question: "<u>にちようび</u>　以外は、　毎日　働きます。",
        optionA: "木曜日",
        optionB: "木曜日",
        optionC: "日曜日",
        optionD: "月曜日",
        correctOption: "optionC"
    },

    {
        question: " むすこは　<u>きょねん</u>　高校を　卒業　しました。",
        optionA: "去年",
        optionB: "今年",
        optionC: "来年",
        optionD: "毎年",
        correctOption: "optionA"
    },

    {
        question: "<u>あした</U>は　数学の　試験が　あります。",
        optionA: "明日",
        optionB: "月日",
        optionC: "明目",
        optionD: "月目",
        correctOption: "optionA"
    },

    {
        question: "私の　コートは　<u>かるい</u>が　暖かい。",
        optionA: "軽い",
        optionB: "薄い",
        optionC: "薄い",
        optionD: "厚い",
        correctOption: "optionA"
    },

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
let timeLeft = 30; // Waktu dalam detik
let currentQuestion = 1; // Soal saat ini

// function for displaying next question in the array to dom
function NextQuestion(index) {
    timeLeft = 30;
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
    window.location.href = `/quiz/nilaiadvance.php?playerGrade=${nilai_akhir}`;
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
      timeLeft = 20;
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