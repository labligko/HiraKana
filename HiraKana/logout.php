<?php
// Mulai atau lanjutkan sesi
session_start();

// Hapus semua data sesi
session_unset();

// Hancurkan sesi
session_destroy();

// Alihkan pengguna ke halaman login atau halaman lain yang sesuai
header("Location: login.php");
exit;
?>
