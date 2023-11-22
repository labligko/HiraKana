//inisiasi soal dalam quiz
const questions = [
    {
        question: "Manakah yang merupakan huruf A?",
        optionA: "め",
        optionB: "ゆ",
        optionC: "き",
        optionD: "あ",
        correctOption: "optionD"
    },

    {
        question: "Huruf apakah ini い?",
        optionA: "Shi",
        optionB: "I",
        optionC: "N",
        optionD: "Wo",
        correctOption: "optionB"
    },

    {
        question: "Huruf apakah ini う?",
        optionA: "Ko",
        optionB: "Chi",
        optionC: "Yo",
        optionD: "U",
        correctOption: "optionD"
    },

    {
        question: "Manakah yang merupakan huruf E?",
        optionA: "は",
        optionB: "せ",
        optionC: "え",
        optionD: "ん",
        correctOption: "optionC"
    },

    {
        question: "Manakah yang merupakan Huruf O?",
        optionA: "と",
        optionB: "の",
        optionC: "れ",
        optionD: "お",
        correctOption: "optionD"
    },

    {
        question: "Huruf apakah ini か?",
        optionA: "Ka",
        optionB: "Hi",
        optionC: "Wa",
        optionD: "Ra",
        correctOption: "optionA"
    },

    {
        question: "Huruf apakah ini き?",
        optionA: "Ma",
        optionB: "Tsu",
        optionC: "Ki",
        optionD: "Su",
        correctOption: "optionC"
    },

    {
        question: "Manakah yang merupakan huruf Ku?",
        optionA: "く",
        optionB: "ら",
        optionC: "を",
        optionD: "わ",
        correctOption: "optionA"
    },

    {
        question: "Manakah yang merupakan huruf Ke?",
        optionA: "し",
        optionB: "こ",
        optionC: "る",
        optionD: "け",
        correctOption: "optionD"
    },

    {
        question: "Huruf apakah ini こ?",
        optionA: "Yu",
        optionB: "Ho",
        optionC: "Fu",
        optionD: "Ko",
        correctOption: "optionD"
    },

    {
        question: "Huruf apakah ini さ?",
        optionA: "A",
        optionB: "Re",
        optionC: "Sa",
        optionD: "O",
        correctOption: "optionC"
    },

  
    {
        question: "Manakah yang merupakan huruf Shi?",
        optionA: "し",
        optionB: "つ",
        optionC: "て",
        optionD: "へ",
        correctOption: "optionA"
    },


    {
        question: "Manakah yang merupakan huruf Su?",
        optionA: "ふ",
        optionB: "す",
        optionC: "む",
        optionD: "ろ",
        correctOption: "optionB"
    },

    {
        question: "Huruf apakah ini せ?",
        optionA: "Chi",
        optionB: "Ke",
        optionC: "Ro",
        optionD: "Se",
        correctOption: "optionD"
    },

    {
        question: "Huruf apakah ini そ?",
        optionA: "So",
        optionB: "Shi",
        optionC: "Tsu",
        optionD: "Fu",
        correctOption: "optionA"
    },

    {
        question: "Manakah yang merupakan huruf Ta?",
        optionA: "に",
        optionB: "な",
        optionC: "た",
        optionD: "あ",
        correctOption: "optionC"
    },

    {
        question: "Manakah yang merupakan huruf Chi?",
        optionA: "ち",
        optionB: "い",
        optionC: "ら",
        optionD: "も",
        correctOption: "optionA"
    },

    {
        question: "Huruf apakah ini つ?",
        optionA: "O",
        optionB: "Yo",
        optionC: "Tsu",
        optionD: "N",
        correctOption: "optionC"
    },

    {
        question: "Huruf apakah ini て?",
        optionA: "Yo",
        optionB: "Ru",
        optionC: "To",
        optionD: "Te",
        correctOption: "optionD"
    },

    {
        question: "Manakah yang merupakan huruf To?",
        optionA: "と",
        optionB: "え",
        optionC: "お",
        optionD: "よ",
        correctOption: "optionA"
    },

    {
        question: "Manakah yang merupakan huruf Na?",
        optionA: "け",
        optionB: "は",
        optionC: "ほ",
        optionD: "な",
        correctOption: "optionD"
    },

    {
        question: "Huruf apakah ini に?",
        optionA: "Ko",
        optionB: "Ni",
        optionC: "Ta",
        optionD: "Ri",
        correctOption: "optionB"
    },

    {
        question: "Huruf apakah ini ぬ?",
        optionA: "Ra",
        optionB: "Nu",
        optionC: "Wo",
        optionD: "Ma",
        correctOption: "optionB"
    },

    {
        question: "Manakah yang merupakan huruf Ne?",
        optionA: "や",
        optionB: "お",
        optionC: "ね",
        optionD: "め",
        correctOption: "optionC"
    },

    {
        question: "Manakah yang merupakan huruf No?",
        optionA: "ゆ",
        optionB: "せ",
        optionC: "の",
        optionD: "め",
        correctOption: "optionC"
    },

    {
        question: "Huruf apakah ini は?",
        optionA: "Ke",
        optionB: "Na",
        optionC: "Yo",
        optionD: "Ha",
        correctOption: "optionD"
    },

    {
        question: "Huruf apakah ini ひ?",
        optionA: "A",
        optionB: "Hi",
        optionC: "E",
        optionD: "Ra",
        correctOption: "optionB"
    },

    {
        question: "Manakah yang merupakan huruf Fu?",
        optionA: "を",
        optionB: "や",
        optionC: "む",
        optionD: "ふ",
        correctOption: "optionD"
    },

    {
        question: "Manakah yang merupakan huruf He?",
        optionA: "う",
        optionB: "ほ",
        optionC: "へ",
        optionD: "お",
        correctOption: "optionC"
    },

    {
        question: "Huruf apakah ini ほ?",
        optionA: "Ne",
        optionB: "U",
        optionC: "N",
        optionD: "Ho",
        correctOption: "optionD"
    },

    {
        question: "Huruf apakah ini ま?",
        optionA: "Ma",
        optionB: "Mu",
        optionC: "Mo",
        optionD: "Yo",
        correctOption: "optionA"
    },

    {
        question: "Huruf apakah ini み?",
        optionA: "U",
        optionB: "I",
        optionC: "Mi",
        optionD: "Ra",
        correctOption: "optionC"
    },

    {
        question: "Manakah yang merupakan huruf Mu?",
        optionA: "む",
        optionB: "せ",
        optionC: "り",
        optionD: "ん",
        correctOption: "optionA"
    },

    {
        question: "Manakah yang merupakan huruf Me?",
        optionA: "え",
        optionB: "も",
        optionC: "や",
        optionD: "め",
        correctOption: "optionD"
    },

    {
        question: "Huruf apakah ini も?",
        optionA: "N",
        optionB: "Ya",
        optionC: "Ko",
        optionD: "Mo",
        correctOption: "optionD"
    },

    {
        question: "Huruf apakah ini や?",
        optionA: "Ra",
        optionB: "Me",
        optionC: "Ya",
        optionD: "I",
        correctOption: "optionC"
    },

  
    {
        question: "Manakah yang merupakan huruf Yu?",
        optionA: "ゆ",
        optionB: "よ",
        optionC: "と",
        optionD: "て",
        correctOption: "optionA"
    },


    {
        question: "Manakah yang merupakan huruf Yo?",
        optionA: "る",
        optionB: "よ",
        optionC: "た",
        optionD: "く",
        correctOption: "optionB"
    },

    {
        question: "Huruf apakah ini ら?",
        optionA: "Chi",
        optionB: "To",
        optionC: "Wa",
        optionD: "Ra",
        correctOption: "optionD"
    },

    {
        question: "Huruf apakah ini り?",
        optionA: "Ri",
        optionB: "Sa",
        optionC: "Ku",
        optionD: "U",
        correctOption: "optionA"
    },

    {
        question: "Manakah yang merupakan huruf Ru?",
        optionA: "を",
        optionB: "い",
        optionC: "る",
        optionD: "つ",
        correctOption: "optionC"
    },

    {
        question: "Manakah yang merupakan huruf Re?",
        optionA: "れ",
        optionB: "ろ",
        optionC: "わ",
        optionD: "か",
        correctOption: "optionA"
    },

    {
        question: "Huruf apakah ini ろ?",
        optionA: "A",
        optionB: "Ta",
        optionC: "Ro",
        optionD: "Ko",
        correctOption: "optionC"
    },

    {
        question: "Huruf apakah ini わ?",
        optionA: "Se",
        optionB: "A",
        optionC: "O",
        optionD: "Wa",
        correctOption: "optionD"
    },

    {
        question: "Manakah yang merupakan Huruf Wo?",
        optionA: "を",
        optionB: "ん",
        optionC: "い",
        optionD: "ひ",
        correctOption: "optionA"
    },

    {
        question: "Huruf apakah ini ん?",
        optionA: "Ha",
        optionB: "E",
        optionC: "A",
        optionD: "N",
        correctOption: "optionD"
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
let timeLeft = 20; // Waktu dalam detik
let currentQuestion = 1; // Soal saat ini

// function for displaying next question in the array to dom
function NextQuestion(index) {
    timeLeft = 20;
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

    clearInterval(countdown);
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
    window.location.href = `/quiz/nilaibeghira.php?playerGrade=${nilai_akhir}`;
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
audio.volume=0.05;

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