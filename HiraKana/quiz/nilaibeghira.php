<?php
  include "../database/connection.php";

  session_start();

  if (isset($_GET["playerGrade"]) && isset($_SESSION["username"])) {
    $playerGrade = $_GET["playerGrade"];
    $username = $_SESSION["username"];

    // Mengambil data dari database untuk pemain yang sedang masuk
    $ambildata = mysqli_query($conn, "SELECT * FROM user WHERE username = '$username'");
    $row = mysqli_fetch_assoc($ambildata);

    if ($row) {
      $nilai_beghira = $row['hiragana_beginner'];
      $high_score_beghira = $row['top_hirabeg'];

      // Memeriksa apakah nilai_quiz lebih besar dari nilai_beghira
      if ($playerGrade > $nilai_beghira) {
        // Update nilai_beghira dengan nilai baru
        $query = "UPDATE user SET hiragana_beginner = '$playerGrade', tgl = NOW() WHERE username = '$username'";
        
        // Memeriksa apakah nilai_quiz lebih besar dari high_score_beghira
        if ($playerGrade > $high_score_beghira) {
          // Jika ya, update juga high_score_beghira
          $best = "UPDATE user SET top_hirabeg = '$playerGrade', tgl_top = NOW() WHERE username = '$username'";
          mysqli_query($conn, $best);
        }

        if (mysqli_query($conn, $query)) {
          echo "berhasil";
          header("Location: /quiz/lobbyquiz.html");
        } else {
          echo "error update: " . mysqli_error($conn);
        }


      } else {
        // Jika nilai_quiz lebih kecil atau sama dengan nilai_beghira,
        // hanya update nilai_beghira saja, high_score_beghira tidak diubah
        $query = "UPDATE user SET hiragana_beginner = '$playerGrade', tgl = NOW() WHERE username = '$username'";
        if (mysqli_query($conn, $query)) {
          echo "berhasil";
          header("Location: /quiz/lobbyquiz.html");
        } else {
          echo "error update: " . mysqli_error($conn);
        }
      }
    } else {
      echo "Pemain tidak ditemukan!";
    }
  } else {
    echo "Invalid parameter!";
  }
?>
