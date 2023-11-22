//inisiasi soal dalam quiz
const questions = [
    {
        question: "ジュース =……?",
        optionA: "Dzuusu",
        optionB: "Jiyusu",
        optionC: "Jiyuusu",
        optionD: "Juusu",
        correctOption: "optionD"
    },

    {
        question: "ツアー =……?",
        optionA: "Shiaa",
        optionB: "Tsuaa",
        optionC: "Soaa",
        optionD: "Noaa",
        correctOption: "optionB"
    },

    {
        question: "ユーモア =……?",
        optionA: "Koomoya",
        optionB: "Koomoa",
        optionC: "Yuumoya",
        optionD: "Yuumoa",
        correctOption: "optionD"
    },

    {
        question: "フェリー =……?",
        optionA: "Fuurii",
        optionB: "Feeri",
        optionC: "Ferii",
        optionD: "Fuerii",
        correctOption: "optionC"
    },

    {
        question: "タトゥー =……?",
        optionA: "Tatouu",
        optionB: "Tatu",
        optionC: "Tatou",
        optionD: "Tatuu",
        correctOption: "optionD"
    },

    {
        question: "ブランド =……?",
        optionA: "Burando",
        optionB: "Furando",
        optionC: "Buranodo",
        optionD: "Furanodo",
        correctOption: "optionA"
    },

    {
        question: "フェスティバル =……?",
        optionA: "Fesuteibaru",
        optionB: "Fasuteebaru",
        optionC: "Fesutibaru",
        optionD: "Fesutebaru",
        correctOption: "optionC"
    },

    {
        question: "ベッド =……?",
        optionA: "Beddo",
        optionB: "Beshido",
        optionC: "Besshido",
        optionD: "Betsudo",
        correctOption: "optionA"
    },

    {
        question: "グローバル =……?",
        optionA: "Kuroubaru",
        optionB: "Gurooparu",
        optionC: "Kurouparu",
        optionD: "Guroobaru",
        correctOption: "optionD"
    },

    {
        question: "ドキドキ =……?",
        optionA: "Tokidoki",
        optionB: "Dokidoki",
        optionC: "Dokitoki",
        optionD: "Tokitoki",
        correctOption: "optionB"
    },

    {
        question: "メロン =……?",
        optionA: "Nuron",
        optionB: "Nuroso",
        optionC: "Meron ",
        optionD: "Meroso",
        correctOption: "optionC"
    },

  
    {
        question: "レシート =……?",
        optionA: "Reshiito",
        optionB: "Reshito",
        optionC: "Restuto",
        optionD: "Retsuuto",
        correctOption: "optionA"
    },


    {
        question: "ナイフ =……?",
        optionA: "Naiwa",
        optionB: "Naifu",
        optionC: "Oiwa",
        optionD: "Oifu",
        correctOption: "optionB"
    },

    {
        question: "ズボン =……?",
        optionA: "Dzuboso",
        optionB: "Zuboso",
        optionC: "Dzubon",
        optionD: "Zubon",
        correctOption: "optionD"
    },

    {
        question: "オフィス =……?",
        optionA: "Ofisu",
        optionB: "Hofisu",
        optionC: "Ofuisu",
        optionD: "Hofuisu",
        correctOption: "optionA"
    },

    {
        question: "チャンネル =……?",
        optionA: "Chiyaneru",
        optionB: "Chianneru",
        optionC: "Channeru",
        optionD: "Chiyanneru",
        correctOption: "optionC"
    },

    {
        question: "プラスチック =……?",
        optionA: "Purasuchikku",
        optionB: "Purasuchitsku",
        optionC: "Purasuchiku",
        optionD: "Purasuchishiku",
        correctOption: "optionA"
    },

    {
        question: "ポジション =……?",
        optionA: "Pojishion",
        optionB: "Pojishiono",
        optionC: "Pojishon ",
        optionD: "Pojisshon",
        correctOption: "optionC"
    },

    {
        question: "リズム =……?",
        optionA: "Ridzumu",
        optionB: "Rizuma",
        optionC: "Ridzuma",
        optionD: "Rizumu",
        correctOption: "optionD"
    },

    {
        question: "ビニール =……?",
        optionA: "Biniiru",
        optionB: "Binire",
        optionC: "Biniire",
        optionD: "Biniru",
        correctOption: "optionA"
    },

    {
        question: "Oopun =……?",
        optionA: "オープソ",
        optionB: "アーポン",
        optionC: "アーポソ",
        optionD: "オープン",
        correctOption: "optionD"
    },

    {
        question: "Katto =……?",
        optionA: "ヤット",
        optionB: "カット",
        optionC: "チット",
        optionD: "カツト",
        correctOption: "optionB"
    },

    {
        question: "Kyanseru =……?",
        optionA: "キャソケル",
        optionB: "キャンセル",
        optionC: "キャンケル",
        optionD: "キャソセル",
        correctOption: "optionB"
    },

    {
        question: "Erebeetaa =……?",
        optionA: "ユレベータ",
        optionB: "ユルベータ",
        optionC: "エレベーター",
        optionD: "エルベーター",
        correctOption: "optionC"
    },

    {
        question: "Chokoreeto =……?",
        optionA: "ナョユレート",
        optionB: "チョユルート",
        optionC: "チョコレート",
        optionD: "ナョコレート",
        correctOption: "optionC"
    },

    {
        question: "Takushii =……?",
        optionA: "タクシー",
        optionB: "ヌクシー",
        optionC: "タクツー",
        optionD: "ヌクツー",
        correctOption: "optionA"
    },

    {
        question: "Tekisuto =……?",
        optionA: "ナキスト",
        optionB: "テキスト",
        optionC: "テキヌト",
        optionD: "ナキヌト",
        correctOption: "optionB"
    },

    {
        question: "Sarada =……?",
        optionA: "サラダ",
        optionB: "サワダ",
        optionC: "セラダ",
        optionD: "セワダ",
        correctOption: "optionA"
    },

    {
        question: "Miruku =……?",
        optionA: "ミルケ",
        optionB: "ニルケ",
        optionC: "ミルク",
        optionD: "ニルク",
        correctOption: "optionC"
    },

    {
        question: "Furuutsu =……?",
        optionA: "ラルーツ",
        optionB: "フルーシ",
        optionC: "ラルーシ",
        optionD: "フルーツ",
        correctOption: "optionD"
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
    window.location.href = `/quiz/nilaiinkata.php?playerGrade=${nilai_akhir}`;
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