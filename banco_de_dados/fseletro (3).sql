-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 02-Fev-2021 às 20:55
-- Versão do servidor: 8.0.21
-- versão do PHP: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `fseletro`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `cliente`
--

DROP TABLE IF EXISTS `cliente`;
CREATE TABLE IF NOT EXISTS `cliente` (
  `id_cliente` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(80) DEFAULT NULL,
  `endereco` varchar(150) DEFAULT NULL,
  `logradouro` decimal(10,0) DEFAULT NULL,
  `telefone` int DEFAULT NULL,
  PRIMARY KEY (`id_cliente`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `cliente`
--

INSERT INTO `cliente` (`id_cliente`, `nome`, `endereco`, `logradouro`, `telefone`) VALUES
(1, 'Marcos', 'Rua A', '34', 11111111),
(2, 'Juliana', 'Rua B', '121', 22222222);

-- --------------------------------------------------------

--
-- Estrutura da tabela `pedidos`
--

DROP TABLE IF EXISTS `pedidos`;
CREATE TABLE IF NOT EXISTS `pedidos` (
  `id_pedido` int NOT NULL AUTO_INCREMENT,
  `id_cliente` int DEFAULT NULL,
  `produto` varchar(250) DEFAULT NULL,
  `preco` float DEFAULT NULL,
  `quantidade` int DEFAULT NULL,
  `valortotal` float DEFAULT NULL,
  PRIMARY KEY (`id_pedido`),
  KEY `id_cliente` (`id_cliente`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `pedidos`
--

INSERT INTO `pedidos` (`id_pedido`, `id_cliente`, `produto`, `preco`, `quantidade`, `valortotal`) VALUES
(1, 1, 'Smartphone Samsung Galaxy S10 128GB Branco 4G', 2299, 1, 2299),
(2, 2, 'Notebook Asus Vivobook X512FB-BR468T Intel Core I5 8GB (Geforce MX110 com 2GB) 1TB W10 15,6 Cinza Escuro', 3699.99, 1, 3699.99);

-- --------------------------------------------------------

--
-- Estrutura da tabela `produtos`
--

DROP TABLE IF EXISTS `produtos`;
CREATE TABLE IF NOT EXISTS `produtos` (
  `idproduto` int NOT NULL AUTO_INCREMENT,
  `categoria` varchar(150) DEFAULT NULL,
  `descricao` varchar(150) DEFAULT NULL,
  `preco` float DEFAULT NULL,
  `precovenda` float DEFAULT NULL,
  `nomeimagem` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`idproduto`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `produtos`
--

INSERT INTO `produtos` (`idproduto`, `categoria`, `descricao`, `preco`, `precovenda`, `nomeimagem`) VALUES
(1, 'celular', 'Smartphone Samsung Galaxy S10 128GB Branco 4G', 2499, 2299, 'imagens/galaxys10.png'),
(2, 'celular', 'Smartphone Moto E6 Play 32GB Dual Chip Android Tela 5.5\" MT6739 4G Câmera 13MP - Azul Metálico.', 1249.9, 1021.9, 'imagens/motorola.png'),
(3, 'celular', 'iPhone 11 64GB Vermelho iOS 4G Wi-Fi Câmera 12MP - Apple', 4879, 4537.47, 'imagens/iphone.png'),
(4, 'celular', 'Smartphone LG K51S Dual Chip Android 9.0 Pie 6.55\" Octa Core 64GB 4G Câmera 32MP+5MP+2MP+2MP - Vermelho', 1389.9, 1320.4, 'imagens/lgk51s.png'),
(5, 'notebook', 'Notebook Asus Vivobook X512FB-BR468T Intel Core I5 8GB (Geforce MX110 com 2GB) 1TB W10 15,6 Cinza Escuro', 3859.69, 3699.99, 'imagens/notebookasus.png'),
(6, 'notebook', 'Notebook Dell Inspiron I15-3583-A3XP 8ª Intel Core I5 8GB 1TB15,6\" W10 Preto', 3889.69, 3849.99, 'imagens/notebookdell.png'),
(7, 'notebook', 'Notebook Lenovo Ultrafino ideapad S145 i7 8565U 8GB 1TB', 4489, 3833.15, 'imagens/notebooklenovo.png'),
(8, 'console', 'Nintendo Switch 32gb Neon Blue Red', 3289, 3199.99, 'imagens/nintendo.png'),
(9, 'console', 'Playstation 4 Hits 1TB Bundle 17 - Dreams + Marvels Spider-Man + Infamous Second Son - PS4', 2789, 2669.99, 'imagens/ps4.png'),
(10, 'console', 'Xbox One S 1tb + 1 Controle + Game Star Wars Jedi Fallen Order + 1 Mês Xbox Live Gold', 2789, 2649.99, 'imagens/xbox.png'),
(11, 'televisao', 'Smart TV LED 50 UHD 4K LG 50UN7310PSC', 3099, 2299, 'imagens/tvlg.png'),
(12, 'televisao', 'Smart TV LED 50 4K Philips 50PUG6654/78', 2399, 2099, 'imagens/tvphillips.png'),
(13, 'televisao', 'Smart TV LED 50 4K TCL 50P8M', 2489, 2199, 'imagens/tvtcl.png');

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `pedidos`
--
ALTER TABLE `pedidos`
  ADD CONSTRAINT `pedidos_ibfk_1` FOREIGN KEY (`id_cliente`) REFERENCES `cliente` (`id_cliente`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
