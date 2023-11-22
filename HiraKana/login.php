<?php
	include 'database/connection.php';

  session_start();

  if(isset($_SESSION['username'])) {
    header("Location: /quiz/loading.html");
    exit;
  }

	if (isset($_POST['submit'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM user WHERE username='$username'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        if (password_verify($password, $row['password'])) {
          $_SESSION['username'] = $username;
          header("Location: /quiz/loading.html");
        } else {
          echo "<script>alert('password salah.')</script>";
        }
    } else {
      echo "<script>alert('buat akun terlebih dahulu.')</script>";
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
    <title>Login From</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />

    <link rel="stylesheet" href="/login1.css" />
  </head>
  <body>
  <div class="banner">
        <video autoplay loop muted>
            <source src="../quiz/japanese-temple.mp4">
        </video>

    <div class="login_form_container">
      <div class="login_form">
        <h2>Login</h2>
        <form action="/login.php" method="post">
          <div class="input_group">
            <i class="fa fa-user"></i>
            <input
              type="text"
              placeholder="Enter Username"
              class="input_text"
              autocomplete="off"
              name="username"
            />
          </div>
          <div class="input_group">
            <i class="fa fa-unlock-alt"></i>
            <input
              type="password"
              placeholder="Enter Password"
              class="input_text"
              autocomplete="off"
              name="password"
            />
          </div>
          <div class="button_group" id="login_button">
            <button class="submit" type="submit" name="submit">Submit</button>
          </div>
          <div class="fotter">
            <a>Belum punya akun?</a>
            <a href="register.php" class="sign">Register</a>
          </div>
          <div class="kembali">
            <button onclick="home()" class="home">Home</button>
          </div>
        </form>
      </div>
    </div>
</div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    <script>
      function home() {
          window.location.href = "/home.html";
      }
    </script>


  </body>
</html>