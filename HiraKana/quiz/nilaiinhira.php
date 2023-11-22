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
      $nilai_hirain = $row['hiragana_intermediate'];
      $high_score_hirain = $row['top_hirain'];

      // Memeriksa apakah nilai_quiz lebih besar dari nilai_hirain
      if ($playerGrade > $nilai_hirain) {
        // Update nilai_hirain dengan nilai baru
        $query = "UPDATE user SET hiragana_intermediate = '$playerGrade', tgl = NOW() WHERE username = '$username'";
        
        // Memeriksa apakah nilai_quiz lebih besar dari high_score_hirain
        if ($playerGrade > $high_score_hirain) {
          // Jika ya, update juga high_score_hirain
          $best = "UPDATE user SET top_hirain = '$playerGrade', tgl_top = NOW() WHERE username = '$username'";
          mysqli_query($conn, $best);
        }

        if (mysqli_query($conn, $query)) {
          echo "berhasil";
          header("Location: /quiz/lobbyquiz.html");
        } else {
          echo "error update: " . mysqli_error($conn);
        }
      } else {
        // Jika nilai_quiz lebih kecil atau sama dengan nilai_hirain,
        // hanya update nilai_hirain saja, high_score_hirain tidak diubah
        $query = "UPDATE user SET hiragana_intermediate = '$playerGrade', tgl = NOW() WHERE username = '$username'";
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
