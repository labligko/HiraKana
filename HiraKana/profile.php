<?php
    // Lakukan koneksi ke database
    include 'database/connection.php'; // Pastikan file connection.php sesuai dengan konfigurasi Anda

    session_start();

    if(!isset($_SESSION['username'])) {
        header("Location: /login.php");
        exit;
    }

    echo '<link href="/gambar/hirakana full.png" rel="shortcut icon">';

    $ambildata = mysqli_query($conn,"select * from user");
     while ($row = mysqli_fetch_assoc($ambildata)){
        if ($row["username"]=== $_SESSION["username"]){
        $name = $row ['username'];
        $id = $row ['id'];
        $hiragana_beginner = $row['hiragana_beginner'];
        $hiragana_intermediate = $row['hiragana_intermediate'];
        $katakana_beginner = $row['katakana_beginner'];
        $katakana_intermediate = $row['katakana_intermediate'];
        $advance = $row['advance'];
        $top_hirabeg = $row['top_hirabeg'];
        $top_hirain = $row['top_hirain'];
        $top_katabeg = $row['top_katabeg'];
        $top_katain = $row['top_katain'];
        $top_advance = $row['top_advance'];
        $tgl = $row['tgl'];
        $tgl_top = $row['tgl_top'];


        echo '<div class="profile-card">
        <div class="profile-header">
        <img class="profile-avatar" src="./images.png" alt="Profile Avatar">
        <h2 class="profile-name">'  . $name . '</h2>
        <h2 class="profile-id"> id: ' . $id . '</h2>
        </div>
        <div class="profile-content">';

        echo '<h1>Skills</h1>';
        echo '<div class="tgl"> Score ' . $name . ' pada: <p class="date">' . $tgl . '</p></div>';

        echo '<h3>Hiragana</h3>';

        echo '<p>Shoshinsha</p>';
        echo '<p>Progress</p>';
        echo '<div class="progress-bar">';
        echo '<div class="progress" style="width: ' . $hiragana_beginner . '%;">';
        echo '<div class="progress-percent">' . $hiragana_beginner . '</div>';
        echo '</div>';
        echo '</div>';

        echo '<p>Chuukyuu</p>';
        echo '<p>Progress</p>';
        echo '<div class="progress-bar">';
        echo '<div class="progress" style="width: ' . $hiragana_intermediate . '%;">';
        echo '<div class="progress-percent">' . $hiragana_intermediate . '</div>';
        echo '</div>';
        echo '</div>';

        echo '<h3>Katakana</h3>';

        echo '<p>Shoshinsha</p>';
        echo '<p>Progress</p>';
        echo '<div class="progress-bar">';
        echo '<div class="progress" style="width: ' . $katakana_beginner . '%;">';
        echo '<div class="progress-percent">' . $katakana_beginner . '</div>';
        echo '</div>';
        echo '</div>';

        echo '<p>Chuukyuu</p>';
        echo '<p>Progress</p>';
        echo '<div class="progress-bar">';
        echo '<div class="progress" style="width: ' . $katakana_intermediate . '%;">';
        echo '<div class="progress-percent">' . $katakana_intermediate . '</div>';
        echo '</div>';
        echo '</div>';

        echo '<h3>Jookyuu</h3>';
        echo '<p>Progress</p>';
        echo '<div class="progress-bar">';
        echo '<div class="progress" style="width: ' . $advance . '%;">';
        echo '<div class="progress-percent">' . $advance . '</div>';
        echo '</div>';
        echo '</div>';

        echo '<div id="popupContainer" class="popup">';
        echo '<div class="popup-content">';
        echo '<span class="close" id="tutupPopup">&times;</span>';
        echo '<p> 
            <p class="judul">Best Score</p>
            <div class="tgl"> Best score ' . $name . ' pada: <p class="date">' . $tgl_top . '</p></div> 
            <p>Hiragana Shoshinsha</p>
            <div class="progress-bar">
            <div class="progress" style="width: ' . $top_hirabeg . '%;">
            <div class="progress-percent" style="color: black;">' . $top_hirabeg . '</div></div></div>
            <p>Hiragana Chuukyuu</p>
            <div class="progress-bar">
            <div class="progress" style="width: ' . $top_hirain . '%;">
            <div class="progress-percent" style="color: black;">' . $top_hirain . '</div></div></div>
            <p>Katakana Shoshinsha</p>
            <div class="progress-bar">
            <div class="progress" style="width: ' . $top_katabeg . '%;">
            <div class="progress-percent" style="color: black;">' . $top_katabeg . '</div></div></div>
            <p>Katakana Chuukyuu</p>
            <div class="progress-bar">
            <div class="progress" style="width: ' . $top_katain . '%;">
            <div class="progress-percent" style="color: black;">' . $top_katain . '</div></div></div>
            <p>Jookyuu</p>
            <div class="progress-bar">
            <div class="progress" style="width: ' . $top_advance . '%;">
            <div class="progress-percent" style="color: black;">' . $top_advance . '</div></div></div>
        </p>
        </div> </div>';

        break;
     }}


?>


<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="/profile.css">
  <link href="/gambar/hirakana full.png" rel="shortcut icon">
  <link 
      rel="stylesheet" 
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" 
      integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" 
      crossorigin="anonymous" 
      referrerpolicy="no-referrer" />
    <title>User Profile</title>
</head>
<body>

        <div class="bawah">
        <button onclick="goBack()"><i class="fas fa-reply"></i> Back</button>
        <button id="tampilkanPopup" class="score" style="width:120px; height:50px; padding:10px"><i class="fas fa-crown"> Best score</i></button>
        <button onclick="logout()"><i class="fas fa-user-slash"></i> Logout</button>
        </div>
        

<script>
    function goBack() {
        window.history.back();
    }
    function logout(){
        window.location.href="/logout.php";
    }
    document.getElementById("tampilkanPopup").addEventListener("click", function() {
    document.getElementById("popupContainer").style.display = "block";
    });

    document.getElementById("tutupPopup").addEventListener("click", function() {
    document.getElementById("popupContainer").style.display = "none";
    });

</script>

</body>
</html>
