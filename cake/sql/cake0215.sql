-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2023-02-15 04:45:27
-- 伺服器版本： 10.4.25-MariaDB
-- PHP 版本： 8.1.10

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
  `remark` varchar(100) NOT NULL,
  `shipping` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 資料表新增資料前，先清除舊資料 `buy_order`
--

TRUNCATE TABLE `buy_order`;
--
-- 傾印資料表的資料 `buy_order`
--

INSERT INTO `buy_order` (`o_id`, `m_id`, `co_upload_date`, `pick_up_date`, `payment`, `pay_state`, `pickup_method`, `co_state`, `remark`, `shipping`) VALUES
(1, 1, '2023-02-15 09:29:05', '2023-02-15 02:26:30', '取貨付款', '未付款', '到店取貨', '未製作', '10歲蠟燭，餐盤10份', '未出貨'),
(2, 3, '2023-02-15 09:31:57', '2023-02-22 09:30:49', '銀行轉帳', '已付款', '到店取貨', '未製作', 'AAAAAAA', '未出貨'),
(3, 1, '2023-02-15 09:33:03', '2023-02-15 02:32:29', '銀行轉帳', '未付款', '宅配', '未製作', 'sssssssssss', '未出貨');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
(7, 3, 'cm0106', 2);

-- --------------------------------------------------------

--
-- 資料表結構 `commodity`
--

DROP TABLE IF EXISTS `commodity`;
CREATE TABLE `commodity` (
  `c_id` varchar(10) NOT NULL,
  `c_name` varchar(50) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  MODIFY `o_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `cake_order`
--
ALTER TABLE `cake_order`
  MODIFY `co_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

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