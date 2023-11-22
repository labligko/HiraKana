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
      $nilai_katakana = $row['katakana_beginner'];
      $high_score_katabeg = $row['top_katabeg'];

      // Memeriksa apakah nilai_quiz lebih besar dari nilai_katakana
      if ($playerGrade > $nilai_katabeg) {
        // Update nilai_katakana dengan nilai baru
        $query = "UPDATE user SET katakana_beginner = '$playerGrade', tgl = NOW() WHERE username = '$username'";
        
        // Memeriksa apakah nilai_quiz lebih besar dari high_score_katakana
        if ($playerGrade > $high_score_katabeg) {
          // Jika ya, update juga high_score_katakana
          $best = "UPDATE user SET top_katabeg = '$playerGrade', tgl_top = NOW() WHERE username = '$username'";
          mysqli_query($conn, $best);
        }

        if (mysqli_query($conn, $query)) {
          echo "berhasil";
          header("Location: /quiz/lobbyquiz.html");
        } else {
          echo "error update: " . mysqli_error($conn);
        }
      } else {
        // Jika nilai_quiz lebih kecil atau sama dengan nilai_katakana,
        // hanya update nilai_katakana saja, high_score_katakana tidak diubah
        $query = "UPDATE user SET katakana_beginner = '$playerGrade', tgl = NOW() WHERE username = '$username'";
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
