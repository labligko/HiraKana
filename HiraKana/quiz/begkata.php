<!DOCTYPE html>
<html>
<head>
    <title>Beginner Katakana</title>
    <link href="/gambar/hirakana full.png" rel="shortcut icon">
    <link rel="stylesheet" type="text/css" href="quiz1.css">
    <link 
      rel="stylesheet" 
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" 
      integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" 
      crossorigin="anonymous" 
      referrerpolicy="no-referrer" />
</head>
<body onload="NextQuestion(0)">

    <div class="banner">
        <video autoplay loop muted>
            <source src="../quiz/winter-japanese.mp4">
        </video>

    <main>
        <!-- creating a modal for when quiz ends -->
        <div class="modal-container" id="score-modal">
          
            <div class="modal-content-container">
              
            <h1>Hasil Akhir</h1>
              
              <div class="grade-details">
                  <p>Menjawab : <span id="question-number1"></span></p>
                  <p>Jawaban Salah : <span id="wrong-answers"></span></p>
                  <p>Jawaban Benar : <span id="right-answers"></span></p>
                  <p>Nilai : <span id="grade-percentage"></span></p>
                  <p ><span id="remarks"></span></p>
              </div>
              
                <div class="modal-button-container">
                    <button onclick="closeScoreModal()">Home</button>
                </div>
              
            </div>
        </div>

        <div class="modal-container-paused" id="paused-modal" style="z-index: 10; display: none;">
          
            <div class="modal-content-container-paused">
              
                <h1>Game paused</h1>
              
                <div class="modal-button-container">
                    <button name="continue" onclick="continueModal()">continue</button>
                    <button onclick="quitGame()" class="back"><i class="fas fa-reply"></i> Quit</button>
                    </div>
              
            </div>
        </div>

        <div class="game-quiz-container">
          
            <div class="game-details-container">
                <button onclick="pauseGame()" class="back">
                    <i class="fas fa-pause"></i>
                </button>

                <h1>Score : <span id="player-score"></span></h1>
                <div id="timer">Waktu: <span id="countdown">20</span> detik</div>
                <h1>Soal : <span id="question-number"></span> / 25</h1>
                <button onclick="toggleBacksound()" class="sound"> 
                    <i class="fa-solid fa-volume-high"></i>
                </button>
            </div>

            <div class="game-question-container">
                <h1 id="display-question"></h1>
            </div>

            <div class="game-options-container">
              
               <div class="modal-container" id="option-modal">
                 
                    <div class="modal-content-container">
                         <h1>Pilih jawaban yang sesuai</h1>
                      
                         <div class="modal-button-container">
                            <button onclick="closeOptionModal()">Ok</button>
                        </div>
                      
                    </div>
                 
               </div>
              
                <span>
                    <input type="radio" id="option-one" name="option" class="radio" value="optionA" />
                    <label for="option-one" class="option" id="option-one-label"></label>
                </span>
              

                <span>
                    <input type="radio" id="option-two" name="option" class="radio" value="optionB" />
                    <label for="option-two" class="option" id="option-two-label"></label>
                </span>
              

                <span>
                    <input type="radio" id="option-three" name="option" class="radio" value="optionC" />
                    <label for="option-three" class="option" id="option-three-label"></label>
                </span>
              

                <span>
                    <input type="radio" id="option-four" name="option" class="radio" value="optionD" />
                    <label for="option-four" class="option" id="option-four-label"></label>
                </span>


            </div>

            <div class="next-button-container">
                <button onclick="handleNextQuestion()">Selanjutnya</button>
            </div>

        </div>
    </main></div>

    <audio id="backsound" loop autoplay >
        <source src="/quiz/backsound.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
    </audio>

    <audio id="benarAudio" src="/quiz/benar.mp3" preload="auto"></audio>
    <audio id="salahAudio" src="/quiz/salah.mp3" preload="auto"></audio>
    <audio id="skipAudio" src="/quiz/skip.mp3" preload="auto"></audio>

    <script src="begkataquiz.js"></script>
</body>
</html>