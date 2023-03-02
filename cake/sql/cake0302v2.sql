-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2023-03-02 09:21:59
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
(3, 1, '2023-02-15 09:33:03', '2023-02-15 02:32:29', '銀行轉帳', '未付款', '宅配', '已製作', 'sssssssssss', '未出貨', 'addressss'),
(4, 3, '2023-02-15 14:37:20', '2023-02-16 14:02:03', '銀行轉帳', '未付款', '宅配', '未製作', 'wwwwwwwww', '未出貨', 'addressss'),
(5, 3, '2023-02-15 14:39:05', '2023-02-16 14:02:03', '銀行轉帳', '未付款', '宅配', '未製作', 'wwwwwwwww', '未出貨', 'addressss'),
(6, 3, '2023-02-15 14:41:36', '2023-02-16 14:02:03', '銀行轉帳', '未付款', '宅配', '未製作', 'wwwwwwwww', '未出貨', 'addressss'),
(7, 1, '2023-02-16 15:59:30', '2023-02-16 14:02:03', '銀行轉帳', '未付款', '宅配', '未製作', 'wwwwwwwww', '未出貨', 'addressss'),
(8, 1, '2023-02-20 09:25:38', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '蠟燭年齡:10\r\n紙盤數量:5', '未出貨', 'qwdfasf'),
(9, 3, '2023-02-23 15:25:43', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '未製作', '蠟燭年齡:10\r\n紙盤數量:10', '未出貨', '台中市公益路'),
(10, 3, '2023-03-01 16:05:27', '2023-02-20 11:00:00', '銀行轉帳', '未付款', '自取', '已製作', 'aaa', '未配送', '台中市');

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
(15, 7, 'bd0106', 2),
(16, 8, 'bd0106', 1),
(17, 8, 'bd0108', 1),
(18, 9, 'cc0601', 1),
(19, 10, 'bd0106', 1);

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
  `img_name` varchar(100) DEFAULT NULL,
  `c_class` varchar(20) NOT NULL,
  `img1` varchar(100) DEFAULT NULL,
  `img2` varchar(100) DEFAULT NULL,
  `img3` varchar(100) DEFAULT NULL,
  `img4` varchar(100) DEFAULT NULL,
  `img5` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 資料表新增資料前，先清除舊資料 `commodity`
--

TRUNCATE TABLE `commodity`;
--
-- 傾印資料表的資料 `commodity`
--

INSERT INTO `commodity` (`c_id`, `c_name`, `price`, `illustrate`, `img_name`, `c_class`, `img1`, `img2`, `img3`, `img4`, `img5`) VALUES
('bd0106', '皇冠', 780, '金箔的質感╳濃厚巧克力\r\n以55%比利時苦甜巧克力和北海道奶霜共同詮釋這款蛋糕的奢華氣勢。表面巧克力碎片的咀嚼快感是特意佈局的節奏，接著是蛋糕的柔軟與巧克力奶霜的層次細節，讓人不得不迷戀它。', '2023-2-23-1677135862391.jpg', '0', '2023-2-23-1677135862391.jpg', '2023-2-24-1677218398287.jpeg', '2023-2-24-1677224106164.jpeg', '', ''),
('bd0108', '芋見香緹', 890, '每天手工現做，堅持天然食材，以蒸煮製成芋泥餡，紫芋濃郁香氣，讓蛋糕呈現最自然樸實的味道，蛋糕外觀特別以北海道奶霜營造純淨清爽感，給人「捨不得刮掉」的好吃感！', '2023-2-23-1677135692654.jpg', '0', '2023-2-23-1677135692654.jpg', NULL, NULL, NULL, NULL),
('bd0151', '法芙娜草莓布朗尼蛋糕', 660, '堅持使用最新鮮且當季的大湖草莓製作， 鮮紅完熟的草莓散發自然甜香，顆顆飽 滿多汁使濃郁法芙娜巧克力布朗尼蛋糕 ，更添一股清爽風味！\r\n此款蛋糕僅提供【台中門市自取】， 因蛋糕使用鮮奶油以及新鮮草莓水果裝飾， 為避免宅配運送過程中損壞，故無法提供 宅配寄送服務。', 'mimisbakehouse-website-8-web.jpg', '0', 'mimisbakehouse-website-8-web.jpg', NULL, NULL, NULL, NULL),
('bd0206', '水果圓舞曲', 780, '綜合水果裝飾，大人小孩都不會拒絕的一款蛋糕\r\n內餡夾入水果鮮奶霜+雞蛋布丁，簡單美味', '2023-2-23-1677136202606.jpeg', '0', '2023-2-23-1677136202606.jpeg', NULL, NULL, NULL, NULL),
('cc0601', '德國黑森林', 820, '蛋糕膨鬆柔軟也很濕潤，有很濃的巧克力香氣。遇上夾層中的碎櫻桃鮮奶油餡後，整個口感更加輕盈，鼻間飄散著很輕很輕的櫻桃酒香。一點也不甜膩。', '2023-2-23-1677134900058.jpg', '0', '2023-2-23-1677134900058.jpg', NULL, NULL, NULL, NULL),
('cc0602', '極光醇黑巧克力6吋', 980, '✿嚴選高純度的比利時72%極純黑巧克力製作\r\n巧克力鮮奶霜加入巧克力晶片，增加口感\r\n濃厚的可可香氣融合綿密的蛋糕體，讓人久久無法忘懷\r\n非常愛吃巧克力的人極力推薦！', '2023-2-23-1677136378536.jpeg', '0', '2023-2-23-1677136378536.jpeg', NULL, NULL, NULL, NULL),
('cm0106', '6吋魔法聖誕樹', 760, '聖誕樹幹造形的香草蛋糕，搭配豐富水果內餡，點綴魔菇與聖誕裝飾，彷彿是聖誕老公公的秘密基地', '2023-2-23-1677136105727.jpg', '0', '2023-2-23-1677136105727.jpg', NULL, NULL, NULL, NULL),
('dl0601', '大甲芋香戀人', 780, '經典的大甲芋泥x雞蛋布丁，大人小孩都不能抗拒的美味\r\n使用法國諾曼第鮮奶霜，香濃滑順\r\n不知道訂什麼口味蛋糕，選它就對了！', '2023-3-2-1677720707260.jpeg', '1', '2023-2-24-1677226394521.jpeg', '', '', '', ''),
('sb06900', '戀莓白白', 900, 'Q彈柔軟的泡芙蛋糕，夾餡輕盈爽口的奶霜、新鮮草莓凍與滑嫩布丁，入口盡是濃郁的乳香，與草莓果凍酸酸甜甜的滋味。', '2023-2-23-1677134587659.jpg', '1', '2023-2-23-1677134587659.jpg', NULL, NULL, NULL, NULL);

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
(12, 3, '2023-02-05 14:32:30', '8吋,巧克力口味，aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', '已製作', '2023-2-5-1675578750796.jpg', '手機', '銀行轉帳', '來店自取', '2023-02-25', 600, '未配送', '未付款'),
(13, 3, '2023-02-06 13:16:28', '8吋,巧克力口味', '已製作', '2023-2-6-1675660588270.jpg', 'email', '銀行轉帳', '來店自取', '2023-03-02', 800, '已配送', '已付款'),
(14, 3, '2023-02-09 15:45:47', '8吋,巧克力口味', '未製作', '2023-2-9-1675928747962.png', '手機', '請選擇', '請選擇', '2023-03-14', 0, '未配送', '未付款'),
(15, 1, '2023-02-13 10:49:11', '8吋,巧克力口味', '未製作', '2023-2-13-1676256551681.png', 'email', '請選擇', '請選擇', '2023-03-15', 0, '未配送', '未付款'),
(16, 3, '2023-03-01 14:24:25', '尺寸:6吋,\n    口味:草莓覆盆子,檸檬藍莓,\n    顏色:cake_White,\n    配件:生日快樂英文插旗($0)*1,氣球($150)*1,生日小皇冠($150)*0,壽字插旗($50)*0,生日派對掛旗($250)*0,\n    備註:aaa', '已製作', '2023-3-1-1677651865978.jpeg', 'E-mail', '銀行轉帳', '來店自取', '2023-03-14', 1000, '未配送', '未付款'),
(17, 1, '2023-03-01 14:26:54', '尺寸:8吋,\n    口味:\n    \n    草莓覆盆子,\n    \n    \n    顏色:cake_cream,\n    配件:\n    生日快樂英文插旗($0)*1,\n    氣球($150)*1,\n    生日小皇冠($150)*0,\n    壽字插旗($50)*0,\n    生日派對掛旗($250)*1,\n    備註:aaaaa', '未製作', '2023-3-1-1677652014683.jpeg', 'E-mail', '請選擇', '請選擇', '2023-03-14', 0, '未配送', '未付款'),
(19, 3, '2023-03-01 15:08:02', '尺寸:6吋,口味:草莓覆盆子,檸檬藍莓,顏色:cake_White,配件:生日快樂英文插旗*1,氣球($150)*1,生日小皇冠($150)*1,壽字插旗($50)*0,生日派對掛旗($250)*0,備註:aaaa', '未製作', '2023-3-1-1677654482656.jpeg', 'E-mail', '請選擇', '請選擇', '2023-03-14', 0, '未配送', '未付款'),
(20, 3, '2023-03-01 15:09:58', '尺寸:6吋,口味:巧克力巴瑞脆片,草莓覆盆子,顏色:cake_White,配件:生日快樂英文插旗*1,氣球($150)*1,壽字插旗($50)*1,備註:aaa', '未製作', '2023-3-1-1677654598986.jpeg', 'E-mail', '請選擇', '請選擇', '2023-03-14', 0, '未配送', '未付款');

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
  `phone` varchar(15) DEFAULT NULL,
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
(1, 'asd123@gmail.com', 'cRDtpNCeBiql5KOQsKVyrA0sAiA', '陳昱廷', '1990-02-08', '男', '0312345678', '420 臺中市豐原區豐年路28號                                                \r\n                                  ', 0),
(2, 'user@gmail.com', 'cRDtpNCeBiql5KOQsKVyrA0sAiA', '管理者', '1990-01-01', NULL, NULL, NULL, 1),
(3, 'abc123@gmail.com', 'cRDtpNCeBiql5KOQsKVyrA0sAiA', '羅淑晶', '1989-06-21', '女', '091234567', '414 臺中市烏日區大同六街33號', 0),
(6, 'jerrt@gmail.com', 'cRDtpNCeBiql5KOQsKVyrA0sAiA', '寶可夢', '2023-01-02', '男', '123456', 'sssssssssssss\r\n                                                ', 0),
(33, 'qwe@gmail.com', 'cRDtpNCeBiql5KOQsKVyrA0sAiA', 'aaa', '1997-05-07', '男', '123456', 'aaaaaaaaaaaa\r\n                                                ', 0),
(34, 'abc@gmail.com', 'cRDtpNCeBiql5KOQsKVyrA0sAiA', '小英', '1996-02-21', '女', '123456', '台中市公益路', 0),
(44, 'jack123@gmail.com', 'cRDtpNCeBiql5KOQsKVyrA0sAiA', 'jack', '1997-05-20', '男', '123456', '台中市公益路', 0);

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
  MODIFY `o_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `cake_order`
--
ALTER TABLE `cake_order`
  MODIFY `co_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `customized`
--
ALTER TABLE `customized`
  MODIFY `cust_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `member`
--
ALTER TABLE `member`
  MODIFY `m_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
