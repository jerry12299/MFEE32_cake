-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2023-02-22 08:47:02
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
  `remark` varchar(100) DEFAULT NULL,
  `shipping` varchar(50) NOT NULL,
  `rec_address` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 資料表新增資料前，先清除舊資料 `buy_order`
--

TRUNCATE TABLE `buy_order`;
--
-- 傾印資料表的資料 `buy_order`
--

INSERT INTO `buy_order` (`o_id`, `m_id`, `co_upload_date`, `pick_up_date`, `payment`, `pay_state`, `pickup_method`, `co_state`, `remark`, `shipping`, `rec_address`) VALUES
(1, 1, '2023-02-15 09:29:05', '2023-02-15 02:26:30', '取貨付款', '已付款', '到店取貨', '未製作', '10歲蠟燭，餐盤10份', '已配送', 'addressss'),
(2, 3, '2023-02-15 09:31:57', '2023-02-22 09:30:49', '銀行轉帳', '已付款', '到店取貨', '已製作', 'AAAAAAA', '未出貨', 'addressss'),
(3, 1, '2023-02-15 09:33:03', '2023-02-15 02:32:29', '銀行轉帳', '未付款', '宅配', '未製作', 'sssssssssss', '未出貨', 'addressss'),
(4, 3, '2023-02-15 14:37:20', '2023-02-16 14:02:03', '銀行轉帳', '未付款', '宅配', '未製作', 'wwwwwwwww', '未出貨', 'addressss'),
(5, 3, '2023-02-15 14:39:05', '2023-02-16 14:02:03', '銀行轉帳', '未付款', '宅配', '未製作', 'wwwwwwwww', '未出貨', 'addressss'),
(6, 3, '2023-02-15 14:41:36', '2023-02-16 14:02:03', '銀行轉帳', '未付款', '宅配', '未製作', 'wwwwwwwww', '未出貨', 'addressss'),
(7, 1, '2023-02-16 15:59:30', '2023-02-16 14:02:03', '銀行轉帳', '未付款', '宅配', '未製作', 'wwwwwwwww', '未出貨', 'addressss'),
(8, 1, '2023-02-20 09:25:38', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '蠟燭年齡:10\r\n紙盤數量:5', '未出貨', 'qwdfasf');

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
(7, 3, 'cm0106', 2),
(9, 4, 'bd0106', 1),
(10, 4, 'bd0108', 1),
(11, 5, 'bd0106', 1),
(12, 5, 'bd0108', 1),
(13, 6, 'cm0106', 1),
(14, 6, 'cm0108', 1),
(15, 7, 'bd0106', 2),
(16, 8, 'bd0106', 1),
(17, 8, 'bd0108', 1);

-- --------------------------------------------------------

--
-- 資料表結構 `commodity`
--

DROP TABLE IF EXISTS `commodity`;
CREATE TABLE `commodity` (
  `c_id` varchar(10) NOT NULL,
  `c_name` varchar(50) NOT NULL,
  `price` int(11) NOT NULL,
  `illustrate` varchar(200) DEFAULT NULL,
  `img_name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 資料表新增資料前，先清除舊資料 `commodity`
--

TRUNCATE TABLE `commodity`;
--
-- 傾印資料表的資料 `commodity`
--

INSERT INTO `commodity` (`c_id`, `c_name`, `price`, `illustrate`, `img_name`) VALUES
('bd0001', '生日蛋糕01', 300, NULL, NULL),
('bd0106', '6吋生日蛋糕', 300, NULL, NULL),
('bd0108', '8吋生日蛋糕', 360, NULL, NULL),
('bd0151', '法芙娜草莓布朗尼蛋糕', 660, '堅持使用最新鮮且當季的大湖草莓製作， 鮮紅完熟的草莓散發自然甜香，顆顆飽 滿多汁使濃郁法芙娜巧克力布朗尼蛋糕 ，更添一股清爽風味！\r\n此款蛋糕僅提供【台中門市自取】， 因蛋糕使用鮮奶油以及新鮮草莓水果裝飾， 為避免宅配運送過程中損壞，故無法提供 宅配寄送服務。', 'mimisbakehouse-website-8-web.jpg'),
('bd0206', '6吋生日蛋糕2號', 330, NULL, NULL),
('cc0001', '巧克力蛋糕01', 350, NULL, NULL),
('cm0106', '6吋聖誕蛋糕', 300, NULL, NULL);

-- --------------------------------------------------------

--
-- 資料表結構 `customized`
--

DROP TABLE IF EXISTS `customized`;
CREATE TABLE `customized` (
  `cust_id` int(11) NOT NULL,
  `m_id` int(11) NOT NULL,
  `cust_upload_date` datetime NOT NULL DEFAULT current_timestamp(),
  `cust_form` varchar(200) NOT NULL,
  `cust_state` varchar(10) NOT NULL,
  `picture` varchar(100) NOT NULL,
  `connection` varchar(50) NOT NULL,
  `cust_pay` varchar(20) NOT NULL,
  `cust_pick` varchar(60) NOT NULL,
  `cust_date` varchar(20) NOT NULL,
  `cust_price` int(11) NOT NULL,
  `cust_shipping` varchar(20) NOT NULL,
  `cust_pay_state` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 資料表新增資料前，先清除舊資料 `customized`
--

TRUNCATE TABLE `customized`;
--
-- 傾印資料表的資料 `customized`
--

INSERT INTO `customized` (`cust_id`, `m_id`, `cust_upload_date`, `cust_form`, `cust_state`, `picture`, `connection`, `cust_pay`, `cust_pick`, `cust_date`, `cust_price`, `cust_shipping`, `cust_pay_state`) VALUES
(1, 1, '2023-01-25 00:00:00', '卡通造型，水果，巧克力', '已製作', 'img/cake.jpg', 'email', '銀行轉帳', '來店自取', '2023-02-28', 600, '未配送', '已付款'),
(12, 3, '2023-02-05 14:32:30', '8吋,巧克力口味，aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', '未製作', '2023-2-5-1675578750796.jpg', '手機', '未定', '未定', '未定', 0, '未開始', '未開始'),
(13, 3, '2023-02-06 13:16:28', '8吋,巧克力口味', '未製作', '2023-2-6-1675660588270.jpg', 'email', '未定', '未定', '未定', 0, '未開始', '未開始'),
(14, 3, '2023-02-09 15:45:47', '8吋,巧克力口味', '未製作', '2023-2-9-1675928747962.png', '手機', '未定', '未定', '未定', 0, '未開始', '未開始'),
(15, 1, '2023-02-13 10:49:11', '8吋,巧克力口味', '未製作', '2023-2-13-1676256551681.png', 'email', '未定', '未定', '未定', 0, '未開始', '未開始');

-- --------------------------------------------------------

--
-- 資料表結構 `member`
--

DROP TABLE IF EXISTS `member`;
CREATE TABLE `member` (
  `m_id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `pwd` varchar(50) NOT NULL,
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
(1, 'asd123@gmail.com', 'cRDtpNCeBiql5KOQsKVyrA0sAiA', '曉明', '2017-02-01', '女', 123456, 'qwdfasf\r\n                                                ', 0),
(2, 'user@gmail.com', 'cRDtpNCeBiql5KOQsKVyrA0sAiA', '管理者', '1990-01-01', NULL, NULL, NULL, 1),
(3, 'abc123@gmail.com', 'cRDtpNCeBiql5KOQsKVyrA0sAiA', '小明', '2015-01-14', 'm', 123456, 'aaaaaaaaaaaaa', 0),
(6, 'jerrt@gmail.com', 'cRDtpNCeBiql5KOQsKVyrA0sAiA', '寶可夢', '2023-01-02', 'm', 123456, 'sssssssssssss', 0),
(33, 'qwe@gmail.com', 'cRDtpNCeBiql5KOQsKVyrA0sAiA', 'aaa', '1997-05-07', 'm', 123456, 'aaaaaaaaaaaa', 0),
(34, 'abc@gmail.com', 'cRDtpNCeBiql5KOQsKVyrA0sAiA', '小英', '1996-02-21', '女', 123456, '台中市公益路', 0),
(37, 'jack123@gmail.com', 'SiezrkVrCj964U6NCwhHVJtxGFk', '傑克', '2023-02-01', '男', 123456, '台中市公益路', 0);

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
  MODIFY `o_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `cake_order`
--
ALTER TABLE `cake_order`
  MODIFY `co_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `customized`
--
ALTER TABLE `customized`
  MODIFY `cust_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `member`
--
ALTER TABLE `member`
  MODIFY `m_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
