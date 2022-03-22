-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 10-02-2022 a las 02:49:50
-- Versión del servidor: 10.5.13-MariaDB-cll-lve
-- Versión de PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `u503732331_payment_gatewa`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administration`
--

CREATE TABLE `administration` (
  `ID_ADMINISTRATION` int(11) NOT NULL,
  `ADMINISTRATION_ACCOUNT_NUMBER` int(11) NOT NULL,
  `ADMINISTRATION_COUNTER` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `ID_CATEGORIES` int(11) NOT NULL,
  `CATEGORY_NAME` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `payments`
--

CREATE TABLE `payments` (
  `ID_PAYMENTS` int(11) NOT NULL,
  `PAYMENT_AMAUNT` int(11) NOT NULL,
  `PAYMENT_DATE` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `ID_USERS` int(11) NOT NULL,
  `USER_NAME` varchar(45) DEFAULT NULL,
  `USER_LASTNAME` varchar(45) DEFAULT NULL,
  `USER_EMAIL` varchar(45) DEFAULT NULL,
  `USER_PHONE` varchar(50) DEFAULT NULL,
  `USER_DNI` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_categorie`
--

CREATE TABLE `user_categorie` (
  `ID_USER_CATEGORIE` int(11) NOT NULL,
  `USER_ID` int(11) NOT NULL,
  `CATEGORY_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_payment_influent`
--

CREATE TABLE `user_payment_influent` (
  `ID_USER_PAYMENT_INFLUENT` int(11) NOT NULL,
  `USER_ID` int(11) NOT NULL,
  `INFLUENT_ID` int(11) NOT NULL,
  `PAYMENT_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `wallet`
--

CREATE TABLE `wallet` (
  `ID_WALLET` int(11) NOT NULL,
  `USER_ID` int(11) NOT NULL,
  `WALLET_AMAUNT` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `wallet_payment`
--

CREATE TABLE `wallet_payment` (
  `ID_WALLET_PAYMENT` int(10) UNSIGNED NOT NULL,
  `WALLET_ID` int(11) NOT NULL,
  `PAYMENT_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `administration`
--
ALTER TABLE `administration`
  ADD PRIMARY KEY (`ID_ADMINISTRATION`);

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`ID_CATEGORIES`),
  ADD UNIQUE KEY `ID_CATEGORIES_UNIQUE` (`ID_CATEGORIES`);

--
-- Indices de la tabla `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`ID_PAYMENTS`),
  ADD UNIQUE KEY `ID_PAYMENTS_UNIQUE` (`ID_PAYMENTS`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID_USERS`),
  ADD UNIQUE KEY `ID_USERS_UNIQUE` (`ID_USERS`),
  ADD UNIQUE KEY `USER_EMAIL_UNIQUE` (`USER_EMAIL`);

--
-- Indices de la tabla `user_categorie`
--
ALTER TABLE `user_categorie`
  ADD PRIMARY KEY (`ID_USER_CATEGORIE`),
  ADD UNIQUE KEY `ID_USER_CATEGORIE_UNIQUE` (`ID_USER_CATEGORIE`),
  ADD KEY `U_ID_idx` (`USER_ID`),
  ADD KEY `C_ID_idx` (`CATEGORY_ID`);

--
-- Indices de la tabla `user_payment_influent`
--
ALTER TABLE `user_payment_influent`
  ADD PRIMARY KEY (`ID_USER_PAYMENT_INFLUENT`),
  ADD UNIQUE KEY `ID_USER_PAYMENT_INFLUENT_UNIQUE` (`ID_USER_PAYMENT_INFLUENT`),
  ADD KEY `USER_ID_idx` (`USER_ID`),
  ADD KEY `INFLUENT_ID_idx` (`INFLUENT_ID`),
  ADD KEY `PAYMENT_ID_idx` (`PAYMENT_ID`);

--
-- Indices de la tabla `wallet`
--
ALTER TABLE `wallet`
  ADD PRIMARY KEY (`ID_WALLET`),
  ADD UNIQUE KEY `ID_WALLET_UNIQUE` (`ID_WALLET`),
  ADD KEY `W_USER_ID_idx` (`USER_ID`);

--
-- Indices de la tabla `wallet_payment`
--
ALTER TABLE `wallet_payment`
  ADD PRIMARY KEY (`ID_WALLET_PAYMENT`),
  ADD KEY `PAYMENT_ID_idx` (`PAYMENT_ID`),
  ADD KEY `WW_ID_idx` (`WALLET_ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `administration`
--
ALTER TABLE `administration`
  MODIFY `ID_ADMINISTRATION` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `ID_CATEGORIES` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `payments`
--
ALTER TABLE `payments`
  MODIFY `ID_PAYMENTS` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `ID_USERS` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `user_categorie`
--
ALTER TABLE `user_categorie`
  MODIFY `ID_USER_CATEGORIE` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `user_categorie`
--
ALTER TABLE `user_categorie`
  ADD CONSTRAINT `C_ID` FOREIGN KEY (`CATEGORY_ID`) REFERENCES `categories` (`ID_CATEGORIES`),
  ADD CONSTRAINT `U_ID` FOREIGN KEY (`USER_ID`) REFERENCES `users` (`ID_USERS`);

--
-- Filtros para la tabla `user_payment_influent`
--
ALTER TABLE `user_payment_influent`
  ADD CONSTRAINT `INFLUENT_ID` FOREIGN KEY (`INFLUENT_ID`) REFERENCES `users` (`ID_USERS`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `PAYMENT_ID` FOREIGN KEY (`PAYMENT_ID`) REFERENCES `payments` (`ID_PAYMENTS`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `USER_ID` FOREIGN KEY (`USER_ID`) REFERENCES `users` (`ID_USERS`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `wallet`
--
ALTER TABLE `wallet`
  ADD CONSTRAINT `W_USER_ID` FOREIGN KEY (`USER_ID`) REFERENCES `users` (`ID_USERS`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `wallet_payment`
--
ALTER TABLE `wallet_payment`
  ADD CONSTRAINT `WP_ID` FOREIGN KEY (`PAYMENT_ID`) REFERENCES `user_payment_influent` (`ID_USER_PAYMENT_INFLUENT`),
  ADD CONSTRAINT `WW_ID` FOREIGN KEY (`WALLET_ID`) REFERENCES `wallet` (`ID_WALLET`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
