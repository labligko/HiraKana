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
      $advance = $row['advance'];
      $top_advance = $row['top_advance'];

      // Memeriksa apakah nilai_quiz lebih besar dari advance
      if ($playerGrade > $advance) {
        // Update advance dengan nilai baru
        $query = "UPDATE user SET advance = '$playerGrade', tgl = NOW() WHERE username = '$username'";
        
        // Memeriksa apakah nilai_quiz lebih besar dari top_advance
        if ($playerGrade > $top_advance) {
          // Jika ya, update juga top_advance
          $best = "UPDATE user SET top_advance = '$playerGrade', tgl_top = NOW() WHERE username = '$username'";
          mysqli_query($conn, $best);
        }

        if (mysqli_query($conn, $query)) {
          echo "berhasil";
          header("Location: /quiz/lobbyquiz.html");
        } else {
          echo "error update: " . mysqli_error($conn);
        }
      } else {
        // Jika nilai_quiz lebih kecil atau sama dengan advance,
        // hanya update advance saja, top_advance tidak diubah
        $query = "UPDATE user SET advance = '$playerGrade', tgl = NOW() WHERE username = '$username'";
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
