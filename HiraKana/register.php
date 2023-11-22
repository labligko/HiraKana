<?php
	include 'database/connection.php';

  session_start();

  if(isset($_SESSION['username'])) {
    header("Location: /home.php");
    exit;
  }

  function generateCode($limit){
    $code = '';
    for($i = 0; $i < $limit; $i++) {
      $code .= mt_rand(0, 9);
    }
    return $code;
  }

  $id = generateCode(11);

  $hiragana_beginner = 0;
  $hiragana_intermediate = 0;
  $katakana_beginner = 0;
  $katakana_intermediate = 0;
  $advance =0;
  $top_hirabeg =0;
  $top_hirain =0;
  $top_katabeg =0;
  $top_katain = 0;
  $top_advance = 0;
  $tgl = NULL;
  $tgl_top = NULL;

	if (isset($_POST['submit'])) {
		$username = $_POST['username'];
		$password = $_POST['password'];
		$password2 = $_POST['password2'];

    if ($password !== $password2) {
      echo "<script>alert('konfimasi password tidak sesuai!')</script>";
      return FALSE;
    }

    $result = mysqli_query($conn, "SELECT username FROM user WHERE username = '$username'");
    if(mysqli_fetch_assoc($result)){
      echo "<script>alert('username yang dipilih sudah terdaftar!')</script>";
      return FALSE;
    }

    $password = password_hash($password, PASSWORD_DEFAULT);
		
		$sql = "INSERT INTO user (id, username, password, hiragana_beginner, hiragana_intermediate, katakana_beginner, katakana_intermediate, advance, top_hirabeg, top_hirain, top_katabeg, top_katain, top_advance, tgl, tgl_top)
		VALUES ('$id', '$username', '$password', '$hiragana_beginner', '$hiragana_intermediate', '$katakana_beginner', '$katakana_intermediate', '$advance', '$top_hirabeg', '$top_hirain', '$top_katabeg', '$top_katain', '$top_advance', '$tgl', '$tgl_top')";

		if ($conn->query($sql) === TRUE) {
      header("Location: login.php");
		} else {
		  echo "<script>alert('Registrasi lagi')</script>";
      echo "Error: " . $sql . "<br>" . $conn->error;
		}
	}

  $conn->close();
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="/gambar/hirakana full.png" rel="shortcut icon">
    <title>Register Form</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <link rel="stylesheet" href="register.css" />
  </head>
  <body>
  <div class="banner">
        <video autoplay loop muted>
            <source src="../quiz/japanese-temple.mp4">
        </video>

    <div class="login_form_container">
      <div class="login_form">
        <h2>Register</h2>
        <form action="register.php" method="post">
          <div class="input_group">
            <i class="fa fa-user"></i>
            <input
              type="text"
              placeholder="Create Username"
              class="input_text"
              autocomplete="off"
              name="username"
              required
            />
          </div>
          <div class="input_group">
            <i class="fa fa-unlock-alt"></i>
            <input
              type="password"
              placeholder="Create Password"
              class="input_text"
              autocomplete="off"
              name="password"
              required
            />
          </div>
          <div class="input_group">
            <i class="fa fa-unlock-alt"></i>
            <input
              type="password"
              placeholder="Confirm Password"
              class="input_text"
              autocomplete="off"
              name="password2"
              required
            />
          </div>
          <div class="button_group" id="login_button">
            <button class="submit" type="submit" name="submit">Create Account</button>
          </div>
          <div class="fotter">
            <a>Sudah punya akun?</a>
            <a href="login.php" class="sign">Log in</a>
          </div>
          <div class="kembali">
            <button onclick="back()" class="back">Home</button>
          </div>
        </form>
      </div>
    </div>
</div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    <script>
        function back() {
            window.location.href="/home.html";
        }
    </script>

  </body>
</html>