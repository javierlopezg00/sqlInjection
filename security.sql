-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 18, 2022 at 12:48 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `security`
--

-- --------------------------------------------------------

--
-- Table structure for table `prueba 1`
--

CREATE TABLE `prueba 1` (
  `prueba` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `supersecret`
--

CREATE TABLE `supersecret` (
  `numSecret` int(11) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `secret` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `supersecret`
--

INSERT INTO `supersecret` (`numSecret`, `owner`, `secret`) VALUES
(1, 'Javier', 'Javier is 40 years old');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `birth` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`username`, `password`, `name`, `birth`) VALUES
('Hacker2', '123', 'SecretName', '0000-00-00'),
('javierlopezg', '123', 'javier', '0000-00-00');

-- --------------------------------------------------------

--
-- Stand-in structure for view `usersview`
-- (See below for the actual view)
--
CREATE TABLE `usersview` (
`username` varchar(255)
,`password` varchar(255)
,`name` varchar(255)
,`birth` date
);

-- --------------------------------------------------------

--
-- Structure for view `usersview`
--
DROP TABLE IF EXISTS `usersview`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `usersview`  AS SELECT `users`.`username` AS `username`, `users`.`password` AS `password`, `users`.`name` AS `name`, `users`.`birth` AS `birth` FROM `users``users`  ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `supersecret`
--
ALTER TABLE `supersecret`
  ADD PRIMARY KEY (`numSecret`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`username`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
