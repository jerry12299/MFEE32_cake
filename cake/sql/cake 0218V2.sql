-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2023-02-18 13:40:37
-- 伺服器版本： 10.4.27-MariaDB
-- PHP 版本： 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `cake`
--
CREATE DATABASE IF NOT EXISTS `cake` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `cake`;

-- --------------------------------------------------------

--
-- 資料表結構 `buy_order`
--

DROP TABLE IF EXISTS `buy_order`;
CREATE TABLE `buy_order` (
  `o_id` int(11) NOT NULL,
  `m_id` int(11) NOT NULL,
  `co_upload_date` datetime NOT NULL DEFAULT current_timestamp(),
  `pick_up_date` datetime NOT NULL,
  `payment` varchar(50) NOT NULL,
  `pay_state` varchar(50) NOT NULL,
  `pickup_method` varchar(50) NOT NULL,
  `co_state` varchar(50) NOT NULL,
  `remark` varchar(100) DEFAULT NULL,
  `shipping` varchar(50) NOT NULL,
  `rec_address` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 資料表新增資料前，先清除舊資料 `buy_order`
--

TRUNCATE TABLE `buy_order`;
--
-- 傾印資料表的資料 `buy_order`
--

INSERT INTO `buy_order` (`o_id`, `m_id`, `co_upload_date`, `pick_up_date`, `payment`, `pay_state`, `pickup_method`, `co_state`, `remark`, `shipping`, `rec_address`) VALUES
(1, 1, '2023-02-15 09:29:05', '2023-02-15 02:26:30', '取貨付款', '未付款', '到店取貨', '未製作', '10歲蠟燭，餐盤10份', '未出貨', 'XXXXXXX路'),
(2, 3, '2023-02-15 09:31:57', '2023-02-22 09:30:49', '銀行轉帳', '已付款', '到店取貨', '未製作', 'AAAAAAA', '未出貨', 'OOOOOOOO市'),
(3, 1, '2023-02-15 09:33:03', '2023-02-15 02:32:29', '銀行轉帳', '未付款', '宅配', '未製作', 'sssssssssss', '未出貨', 'sssssss樓'),
(5, 1, '2023-02-18 10:48:26', '2023-02-20 13:00:00', '銀行轉帳', '未付款', '自取', '未製作', '20歲蠟燭', '未出貨', 'qwdfasf'),
(6, 1, '2023-02-18 12:23:06', '2023-02-19 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '20歲蠟燭', '未出貨', 'qwdfasf'),
(7, 1, '2023-02-18 12:25:16', '2023-02-22 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '20歲蠟燭', '未出貨', 'qwdfasf'),
(8, 1, '2023-02-18 12:30:30', '2023-02-24 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '20歲蠟燭', '未出貨', 'qwdfasf'),
(9, 1, '2023-02-18 12:35:28', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '20歲蠟燭', '未出貨', 'qwdfasf'),
(10, 1, '2023-02-18 12:39:38', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '20歲蠟燭', '未出貨', 'qwdfasf'),
(11, 1, '2023-02-18 12:42:57', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '20歲蠟燭', '未出貨', 'qwdfasf'),
(12, 1, '2023-02-18 12:45:51', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', 's', '未出貨', 'qwdfasf'),
(13, 1, '2023-02-18 12:54:21', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '', '未出貨', 'qwdfasf'),
(14, 1, '2023-02-18 13:15:22', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '20歲蠟燭', '未出貨', 'qwdfasf'),
(15, 1, '2023-02-18 13:17:14', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '20歲蠟燭', '未出貨', 'qwdfasf'),
(16, 1, '2023-02-18 13:19:02', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '20歲蠟燭', '未出貨', 'qwdfasf'),
(17, 1, '2023-02-18 13:19:40', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '20歲蠟燭', '未出貨', 'qwdfasf'),
(18, 1, '2023-02-18 13:22:10', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '20歲蠟燭', '未出貨', 'qwdfasf'),
(19, 1, '2023-02-18 13:23:24', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '20歲蠟燭', '未出貨', 'qwdfasf'),
(20, 1, '2023-02-18 13:28:56', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '20歲蠟燭', '未出貨', 'qwdfasf'),
(26, 1, '2023-02-18 13:47:40', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '', '未出貨', 'qwdfasf'),
(27, 3, '2023-02-18 13:56:20', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '', '未出貨', 'aaaaaaaaaaaaa'),
(28, 3, '2023-02-18 13:58:45', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '', '未出貨', 'aaaaaaaaaaaaa'),
(29, 3, '2023-02-18 14:02:40', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '', '未出貨', 'aaaaaaaaaaaaa'),
(30, 3, '2023-02-18 14:06:29', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '', '未出貨', 'aaaaaaaaaaaaa'),
(31, 3, '2023-02-18 15:07:54', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '', '未出貨', 'aaaaaaaaaaaaa'),
(32, 3, '2023-02-18 15:12:18', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '', '未出貨', 'aaaaaaaaaaaaa'),
(33, 1, '2023-02-18 15:27:10', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '', '未出貨', 'qwdfasf'),
(34, 1, '2023-02-18 15:28:03', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '20歲蠟燭', '未出貨', 'qwdfasf'),
(35, 1, '2023-02-18 15:29:25', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '', '未出貨', 'qwdfasf'),
(36, 1, '2023-02-18 15:30:16', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '', '未出貨', 'qwdfasf'),
(37, 3, '2023-02-18 15:57:19', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '', '未出貨', 'aaaaaaaaaaaaa'),
(38, 3, '2023-02-18 16:00:14', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '011', '未出貨', 'aaaaaaaaaaaaa'),
(39, 3, '2023-02-18 16:55:05', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '012', '未出貨', 'aaaaaaaaaaaaa'),
(40, 3, '2023-02-18 16:59:21', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '3', '未出貨', 'aaaaaaaaaaaaa'),
(41, 3, '2023-02-18 17:07:24', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '40', '未出貨', 'aaaaaaaaaaaaa'),
(42, 3, '2023-02-18 17:09:42', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '41', '未出貨', 'aaaaaaaaaaaaa'),
(43, 3, '2023-02-18 17:16:03', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '43', '未出貨', 'aaaaaaaaaaaaa'),
(44, 3, '2023-02-18 17:24:49', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '44', '未出貨', 'aaaaaaaaaaaaa'),
(45, 3, '2023-02-18 17:56:35', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '00', '未出貨', 'aaaaaaaaaaaaa'),
(46, 3, '2023-02-18 17:57:54', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '46', '未出貨', 'aaaaaaaaaaaaa'),
(47, 3, '2023-02-18 18:00:02', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '47', '未出貨', 'aaaaaaaaaaaaa'),
(48, 3, '2023-02-18 18:00:59', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '48', '未出貨', 'aaaaaaaaaaaaa'),
(49, 3, '2023-02-18 18:02:44', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '', '未出貨', 'aaaaaaaaaaaaa'),
(50, 3, '2023-02-18 18:36:05', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '', '未出貨', 'aaaaaaaaaaaaa'),
(51, 3, '2023-02-18 18:37:55', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '', '未出貨', 'aaaaaaaaaaaaa'),
(52, 3, '2023-02-18 18:38:53', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '', '未出貨', 'aaaaaaaaaaaaa'),
(53, 1, '2023-02-18 19:22:50', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '', '未出貨', 'qwdfasf'),
(54, 1, '2023-02-18 19:23:31', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '', '未出貨', 'qwdfasf'),
(55, 3, '2023-02-18 19:32:14', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '', '未出貨', 'aaaaaaaaaaaaa'),
(56, 1, '2023-02-18 19:37:47', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '20歲蠟燭', '未出貨', 'qwdfasf'),
(57, 3, '2023-02-18 19:38:59', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '20歲蠟燭', '未出貨', 'aaaaaaaaaaaaa'),
(58, 3, '2023-02-18 19:39:42', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '', '未出貨', 'aaaaaaaaaaaaa'),
(59, 3, '2023-02-18 19:40:29', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '20歲蠟燭', '未出貨', 'aaaaaaaaaaaaa'),
(60, 3, '2023-02-18 19:41:46', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '20歲蠟燭', '未出貨', 'aaaaaaaaaaaaa'),
(61, 3, '2023-02-18 19:42:13', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '', '未出貨', 'aaaaaaaaaaaaa'),
(62, 3, '2023-02-18 19:47:43', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '20歲蠟燭', '未出貨', 'aaaaaaaaaaaaa'),
(63, 3, '2023-02-18 19:49:24', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '', '未出貨', 'aaaaaaaaaaaaa'),
(64, 3, '2023-02-18 19:50:29', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '20歲蠟燭', '未出貨', 'aaaaaaaaaaaaa'),
(65, 3, '2023-02-18 19:52:45', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '20歲蠟燭', '未出貨', 'aaaaaaaaaaaaa'),
(66, 3, '2023-02-18 19:53:11', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '20歲蠟燭', '未出貨', 'aaaaaaaaaaaaa'),
(67, 3, '2023-02-18 19:59:13', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '20歲蠟燭', '未出貨', 'aaaaaaaaaaaaa'),
(68, 3, '2023-02-18 19:59:43', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '20歲蠟燭', '未出貨', 'aaaaaaaaaaaaa'),
(69, 3, '2023-02-18 20:00:36', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '20歲蠟燭', '未出貨', 'aaaaaaaaaaaaa'),
(70, 3, '2023-02-18 20:01:25', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '20歲蠟燭', '未出貨', 'aaaaaaaaaaaaa'),
(71, 3, '2023-02-18 20:03:44', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '', '未出貨', 'aaaaaaaaaaaaa'),
(72, 3, '2023-02-18 20:03:59', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '20歲蠟燭', '未出貨', 'aaaaaaaaaaaaa'),
(73, 3, '2023-02-18 20:05:04', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', 'ssss', '未出貨', 'aaaaaaaaaaaaa'),
(74, 3, '2023-02-18 20:10:41', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '蠟燭10歲', '未出貨', 'aaaaaaaaaaaaa'),
(75, 3, '2023-02-18 20:10:57', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '', '未出貨', 'aaaaaaaaaaaaa'),
(76, 3, '2023-02-18 20:15:19', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '', '未出貨', 'aaaaaaaaaaaaa'),
(77, 3, '2023-02-18 20:18:31', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '', '未出貨', 'aaaaaaaaaaaaa'),
(78, 3, '2023-02-18 20:19:26', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '', '未出貨', 'aaaaaaaaaaaaa'),
(79, 1, '2023-02-18 20:22:44', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '', '未出貨', 'qwdfasf'),
(80, 1, '2023-02-18 20:24:24', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '20歲蠟燭', '未出貨', 'qwdfasf'),
(81, 1, '2023-02-18 20:24:45', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '', '未出貨', 'qwdfasfs'),
(82, 1, '2023-02-18 20:24:54', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '20歲蠟燭', '未出貨', 'qwdfasfs'),
(83, 1, '2023-02-18 20:25:02', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '20歲蠟燭', '未出貨', 'qwdfasf'),
(84, 1, '2023-02-18 20:25:08', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', 'aaaaa', '未出貨', 'qwdfasf'),
(85, 1, '2023-02-18 20:31:27', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '', '未出貨', 'qwdfasf'),
(86, 1, '2023-02-18 20:31:53', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '20歲蠟燭', '未出貨', 'qwdfasf'),
(87, 1, '2023-02-18 20:37:27', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '20歲蠟燭', '未出貨', 'qwdfasf'),
(88, 1, '2023-02-18 20:38:11', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '20歲蠟燭', '未出貨', 'qwdfasf'),
(89, 1, '2023-02-18 20:38:58', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '20歲蠟燭', '未出貨', 'qwdfasf');

-- --------------------------------------------------------

--
-- 資料表結構 `cake_order`
--

DROP TABLE IF EXISTS `cake_order`;
CREATE TABLE `cake_order` (
  `co_id` int(11) NOT NULL,
  `o_id` int(11) NOT NULL,
  `c_id` varchar(10) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 資料表新增資料前，先清除舊資料 `cake_order`
--

TRUNCATE TABLE `cake_order`;
--
-- 傾印資料表的資料 `cake_order`
--

INSERT INTO `cake_order` (`co_id`, `o_id`, `c_id`, `quantity`) VALUES
(1, 1, 'bd0001', 1),
(2, 2, 'bd0001', 1),
(5, 3, 'bd0106', 2),
(6, 3, 'bd0108', 3),
(7, 3, 'cm0106', 2),
(9, 5, 'bd0106', 2),
(10, 5, 'bd0108', 2),
(11, 6, 'cm0108', 2),
(29, 18, 'bd0106', 1),
(30, 19, 'bd0106', 1),
(31, 19, 'bd0108', 1),
(32, 20, 'bd0108', 1),
(33, 20, 'bd0106', 1),
(45, 26, 'bd0108', 1),
(46, 27, 'bd0106', 1),
(47, 27, 'bd0108', 1),
(48, 28, 'bd0106', 1),
(49, 28, 'bd0108', 1),
(50, 29, 'bd0106', 1),
(51, 29, 'bd0108', 1),
(52, 30, 'bd0106', 1),
(53, 30, 'bd0108', 1),
(54, 31, 'bd0106', 1),
(55, 31, 'bd0108', 1),
(56, 32, 'bd0106', 1),
(57, 32, 'bd0108', 1),
(58, 33, 'bd0106', 1),
(59, 33, 'bd0108', 1),
(60, 34, 'bd0106', 1),
(61, 34, 'bd0108', 1),
(62, 35, 'bd0106', 1),
(63, 35, 'bd0108', 1),
(64, 36, 'bd0106', 1),
(65, 37, 'bd0106', 1),
(66, 37, 'bd0108', 1),
(67, 38, 'bd0106', 1),
(68, 38, 'bd0108', 1),
(69, 39, 'bd0106', 1),
(70, 39, 'bd0108', 1),
(71, 40, 'bd0106', 1),
(72, 40, 'bd0108', 1),
(73, 41, 'bd0106', 1),
(74, 41, 'bd0108', 1),
(75, 42, 'bd0108', 1),
(76, 42, 'bd0106', 1),
(77, 43, 'bd0108', 1),
(78, 43, 'bd0106', 1),
(79, 45, 'bd0108', 1),
(80, 45, 'bd0106', 1),
(81, 46, 'bd0106', 1),
(82, 46, 'bd0108', 1),
(83, 47, 'bd0108', 1),
(84, 47, 'bd0106', 1),
(85, 48, 'bd0108', 1),
(86, 48, 'bd0106', 1),
(87, 49, 'bd0106', 1),
(88, 49, 'bd0108', 1),
(89, 50, 'bd0106', 1),
(90, 50, 'bd0108', 1),
(91, 51, 'bd0106', 1),
(92, 51, 'bd0108', 1),
(93, 52, 'bd0106', 1),
(94, 52, 'bd0108', 1),
(95, 53, 'bd0106', 1),
(96, 53, 'bd0108', 1),
(97, 54, 'bd0106', 1),
(98, 54, 'bd0108', 1),
(99, 55, 'bd0106', 1),
(100, 55, 'bd0108', 1),
(101, 56, 'bd0106', 1),
(102, 56, 'bd0108', 1),
(103, 57, 'bd0106', 1),
(104, 57, 'bd0108', 1),
(105, 58, 'bd0106', 1),
(106, 58, 'bd0108', 1),
(107, 59, 'bd0106', 1),
(108, 59, 'bd0108', 1),
(109, 60, 'bd0106', 1),
(110, 60, 'bd0108', 1),
(111, 61, 'bd0106', 1),
(112, 61, 'bd0108', 1),
(113, 62, 'bd0106', 1),
(114, 62, 'bd0108', 1),
(115, 63, 'bd0106', 1),
(116, 63, 'bd0108', 1),
(117, 64, 'bd0106', 1),
(118, 64, 'bd0108', 1),
(119, 65, 'bd0106', 1),
(120, 65, 'bd0108', 1),
(121, 66, 'bd0106', 1),
(122, 66, 'bd0108', 1),
(123, 67, 'bd0106', 2),
(124, 68, 'bd0106', 2),
(125, 69, 'bd0106', 2),
(126, 70, 'bd0106', 3),
(127, 70, 'bd0108', 1),
(128, 71, 'bd0106', 3),
(129, 71, 'bd0108', 1),
(130, 72, 'bd0106', 3),
(131, 72, 'bd0108', 1),
(132, 73, 'bd0106', 3),
(133, 73, 'bd0108', 1),
(134, 74, 'bd0106', 3),
(135, 74, 'bd0108', 1),
(136, 75, 'bd0106', 3),
(137, 75, 'bd0108', 1),
(138, 76, 'bd0106', 3),
(139, 76, 'bd0108', 1),
(140, 77, 'bd0106', 1),
(141, 77, 'bd0108', 1),
(142, 78, 'bd0106', 1),
(143, 78, 'bd0108', 1),
(144, 79, 'bd0106', 1),
(145, 79, 'bd0108', 1),
(146, 80, 'bd0106', 1),
(147, 80, 'bd0108', 1),
(148, 81, 'bd0106', 1),
(149, 81, 'bd0108', 1),
(150, 82, 'bd0106', 1),
(151, 82, 'bd0108', 1),
(152, 83, 'bd0106', 1),
(153, 83, 'bd0108', 1),
(154, 84, 'bd0106', 1),
(155, 84, 'bd0108', 1),
(156, 85, 'bd0106', 1),
(157, 85, 'bd0108', 1),
(158, 86, 'bd0106', 1),
(159, 86, 'bd0108', 1),
(160, 87, 'bd0106', 1),
(161, 87, 'bd0108', 1),
(162, 88, 'bd0106', 1),
(163, 88, 'bd0108', 1),
(164, 89, 'bd0106', 1),
(165, 89, 'bd0108', 1);

-- --------------------------------------------------------

--
-- 資料表結構 `commodity`
--

DROP TABLE IF EXISTS `commodity`;
CREATE TABLE `commodity` (
  `c_id` varchar(10) NOT NULL,
  `c_name` varchar(50) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 資料表新增資料前，先清除舊資料 `commodity`
--

TRUNCATE TABLE `commodity`;
--
-- 傾印資料表的資料 `commodity`
--

INSERT INTO `commodity` (`c_id`, `c_name`, `price`) VALUES
('bd0001', '生日蛋糕01', 300),
('bd0106', '6吋生日蛋糕', 300),
('bd0108', '8吋生日蛋糕', 360),
('cc0001', '巧克力蛋糕01', 350),
('cm0106', '6吋聖誕蛋糕', 300),
('cm0108', '8吋聖誕蛋糕', 360);

-- --------------------------------------------------------

--
-- 資料表結構 `customized`
--

DROP TABLE IF EXISTS `customized`;
CREATE TABLE `customized` (
  `cust_id` int(11) NOT NULL,
  `m_id` int(11) NOT NULL,
  `cust_upload_date` datetime NOT NULL DEFAULT current_timestamp(),
  `cust_form` varchar(100) NOT NULL,
  `cust_state` varchar(10) NOT NULL,
  `picture` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 資料表新增資料前，先清除舊資料 `customized`
--

TRUNCATE TABLE `customized`;
--
-- 傾印資料表的資料 `customized`
--

INSERT INTO `customized` (`cust_id`, `m_id`, `cust_upload_date`, `cust_form`, `cust_state`, `picture`) VALUES
(1, 1, '2023-01-25 00:00:00', '卡通造型，水果，巧克力', '未開始', 'img/cake.jpg'),
(12, 3, '2023-02-05 14:32:30', '8吋,巧克力口味', '未製作', '2023-2-5-1675578750796.jpg'),
(13, 3, '2023-02-06 13:16:28', '8吋,巧克力口味', '未製作', '2023-2-6-1675660588270.jpg'),
(14, 3, '2023-02-09 15:45:47', '8吋,巧克力口味', '未製作', '2023-2-9-1675928747962.png'),
(15, 1, '2023-02-13 10:49:11', '8吋,巧克力口味', '未製作', '2023-2-13-1676256551681.png');

-- --------------------------------------------------------

--
-- 資料表結構 `member`
--

DROP TABLE IF EXISTS `member`;
CREATE TABLE `member` (
  `m_id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `pwd` varchar(30) NOT NULL,
  `m_name` varchar(50) NOT NULL,
  `birthday` date DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `phone` int(11) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `rights` tinyint(3) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 資料表新增資料前，先清除舊資料 `member`
--

TRUNCATE TABLE `member`;
--
-- 傾印資料表的資料 `member`
--

INSERT INTO `member` (`m_id`, `email`, `pwd`, `m_name`, `birthday`, `gender`, `phone`, `address`, `rights`) VALUES
(1, 'asd123@gmail.com', '1234', '曉明', '2022-01-01', 'm', 123456, 'qwdfasf', 0),
(2, 'user@gmail.com', '1234', '管理者', NULL, NULL, NULL, NULL, 1),
(3, 'abc123@gmail.com', '1234', '小明', '2015-01-14', 'm', 123456, 'aaaaaaaaaaaaa', 0),
(6, 'jerrt@gmail.com', '1234', '寶可夢', '2023-01-02', 'm', 123456, 'sssssssssssss', 0),
(33, 'qwe@gmail.com', '1234', 'aaa', '1997-05-07', 'm', 123456, 'aaaaaaaaaaaa', 0);

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `buy_order`
--
ALTER TABLE `buy_order`
  ADD PRIMARY KEY (`o_id`);

--
-- 資料表索引 `cake_order`
--
ALTER TABLE `cake_order`
  ADD PRIMARY KEY (`co_id`);

--
-- 資料表索引 `commodity`
--
ALTER TABLE `commodity`
  ADD PRIMARY KEY (`c_id`);

--
-- 資料表索引 `customized`
--
ALTER TABLE `customized`
  ADD PRIMARY KEY (`cust_id`);

--
-- 資料表索引 `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`m_id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `buy_order`
--
ALTER TABLE `buy_order`
  MODIFY `o_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=90;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `cake_order`
--
ALTER TABLE `cake_order`
  MODIFY `co_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=166;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `customized`
--
ALTER TABLE `customized`
  MODIFY `cust_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `member`
--
ALTER TABLE `member`
  MODIFY `m_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;