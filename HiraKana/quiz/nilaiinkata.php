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
      $katakana_intermediate = $row['katakana_intermediate'];
      $top_katain = $row['top_katain'];

      // Memeriksa apakah nilai_quiz lebih besar dari katakana_intermediate
      if ($playerGrade > $katakana_intermediate) {
        // Update katakana_intermediate dengan nilai baru
        $query = "UPDATE user SET katakana_intermediate = '$playerGrade', tgl = NOW() WHERE username = '$username'";
        
        // Memeriksa apakah nilai_quiz lebih besar dari top_katain
        if ($playerGrade > $top_katain) {
          // Jika ya, update juga top_katain
          $best = "UPDATE user SET top_katain = '$playerGrade', tgl_top = NOW() WHERE username = '$username'";
          mysqli_query($conn, $best);
        }

        if (mysqli_query($conn, $query)) {
          echo "berhasil";
          header("Location: /quiz/lobbyquiz.html");
        } else {
          echo "error update: " . mysqli_error($conn);
        }
      } else {
        // Jika nilai_quiz lebih kecil atau sama dengan katakana_intermediate,
        // hanya update katakana_intermediate saja, top_katain tidak diubah
        $query = "UPDATE user SET katakana_intermediate = '$playerGrade', tgl = NOW() WHERE username = '$username'";
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
