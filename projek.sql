-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 23 Nov 2023 pada 08.43
-- Versi server: 10.4.24-MariaDB
-- Versi PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `projek`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `id` bigint(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `hiragana_beginner` int(11) NOT NULL,
  `hiragana_intermediate` int(11) NOT NULL,
  `katakana_beginner` int(11) NOT NULL,
  `katakana_intermediate` int(11) NOT NULL,
  `advance` int(11) NOT NULL,
  `top_hirabeg` int(11) NOT NULL,
  `top_hirain` int(11) NOT NULL,
  `top_katabeg` int(11) NOT NULL,
  `top_katain` int(11) NOT NULL,
  `top_advance` int(11) NOT NULL,
  `tgl` datetime NOT NULL,
  `tgl_top` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `hiragana_beginner`, `hiragana_intermediate`, `katakana_beginner`, `katakana_intermediate`, `advance`, `top_hirabeg`, `top_hirain`, `top_katabeg`, `top_katain`, `top_advance`, `tgl`, `tgl_top`) VALUES
(1133838783, 'Diandra', '$2y$10$AfwKiPMxnFpeHznwpSw.n.tVDhpYGi/30Tsg4toRexlSNUQjeI1Ni', 92, 88, 0, 0, 20, 92, 88, 0, 0, 20, '2023-10-11 13:31:43', '2023-10-11 13:31:43'),
(23156323901, 'Beta', '$2y$10$UXD1T5iv7xPfDXGWbrLUTuQ0YArDz9kIssEag9fasA9tQISZ/lIZq', 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, '2023-10-25 14:33:57', '2023-10-25 08:55:08'),
(28244918038, 'tes', '$2y$10$I1jL7LCXxQf9e2MMf4YgH.Ho7dsy4Xi6cODNTQjlTIxBgqE3PpgYy', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(32403225042, 'coba', '$2y$10$ZqEYmAhg7bxpG1PVrk.eZOC77L.IfNsdwlpaVDfGD3C0U3c4kfD5i', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(34959771827, 'user', '$2y$10$CQ9U71LDO1SxBQdtP7Bcs.6Q1AmPXoseWr1mDMwBSLpvQQl2HzlXG', 0, 0, 8, 0, 0, 100, 88, 76, 56, 48, '2023-10-26 10:26:30', '2023-10-10 10:31:47'),
(69687468943, 'Dimaz', '$2y$10$bpzvNwnG1fgYeLumjI4lFudvTsu20ZbYH9EFPqrYi2xrXPryTXx1.', 64, 0, 0, 0, 0, 64, 0, 0, 0, 0, '2023-10-11 13:57:52', '2023-10-11 13:57:52'),
(76098451813, 'azizariskia', '$2y$10$PwPiS2h9ljnM71V1msqtpe5BUdecGUoVfhOyiBuw2ROw9jlg/16UK', 0, 0, 0, 12, 0, 68, 0, 0, 12, 0, '2023-10-24 20:43:47', '2023-10-24 20:38:52'),
(89589907288, 'halo', '$2y$10$HOpD7aTCQD0CPVcZeslvo.fg/xGGouDWcrKDm8dGdM4alVLs3Y2j6', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `username` (`username`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
