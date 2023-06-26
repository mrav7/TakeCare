-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 26, 2023 at 01:14 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `DB`
--

-- --------------------------------------------------------

--
-- Table structure for table `Patients`
--

CREATE TABLE `Patients` (
  `ID` int(11) NOT NULL,
  `IDProfessional` int(10) NOT NULL COMMENT 'La ID del profesional de la salud que atiende al paciente.',
  `firstname` varchar(100) NOT NULL,
  `middlename` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `rut` varchar(20) NOT NULL,
  `birthdate` date NOT NULL,
  `age` int(150) NOT NULL,
  `gender` tinyint(1) NOT NULL,
  `address` varchar(100) NOT NULL,
  `phone` varchar(100) NOT NULL,
  `insurance` varchar(100) NOT NULL,
  `diagnostics` text NOT NULL,
  `treatments` text NOT NULL,
  `observations` varchar(1024) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Patients`
--

INSERT INTO `Patients` (`ID`, `IDProfessional`, `firstname`, `middlename`, `lastname`, `rut`, `birthdate`, `age`, `gender`, `address`, `phone`, `insurance`, `diagnostics`, `treatments`, `observations`) VALUES
(2, 1, 'Manuel', 'Ortega', 'Guzman', '4.653.645-2', '1934-08-14', 89, 0, 'Avenida Presidente Juan Antonio Ríos, 1080, Villarica', '+569 9045 9036', 'ISAPRE', 'At aeque doming habemus usu. At duis veniam sea, cu principes moderatius intellegebat sea, eum no delectus quaestio. Novum vocent oblique per te, dicit sanctus labores an nec. Usu ea vitae option.\r\n\r\nPro brute gubergren ne, per cibo maluisset gloriatur ex. Sed dico posse hendrerit no, nec oblique recusabo omittantur et. Liber consul melius in his, nostro integre iudicabit mel no. Dicunt interesset nam ad. At mel eleifend salutatus omittantur, sed docendi noluisse convenire ex. Ipsum movet admodum eum ne, vel ea dico docendi referrentur.', 'Eum ea insolens delicatissimi. Ei qui nonumy mollis, quo atqui scripta in. Alienum scribentur philosophia at vel, te tritani delicata scriptorem vis. Eos et praesent accusamus. Id qui aeque essent debitis, mei te omnis placerat pertinacia.', 'Ad vel iracundia philosophia, an minim paulo delectus sit. Mel eu rebum adolescens, illud etiam mei no. Eu deseruisse intellegam quo. Vix in mutat malorum aliquid, zril torquatos ius ea, ea nulla aliquid mel. Id sed soleat oblique iudicabit, sea amet causae alterum id. Quo atqui assum vituperatoribus ut, paulo referrentur ex quo. In sit delectus omittantur, fierent mandamus reformidans te eos, civibus ocurreret disputando per et.'),
(3, 6, 'Valentina', 'Espinoza', 'Almeida', '7.595.313-5', '1950-03-30', 73, 1, 'Uno Norte 461 Of. 506, Viña del Mar', '+569 9894 3527', 'ISAPRE', 'In habemus fuisset denique quo, iuvaret legendos cotidieque ei per, vis ei quas postea. Sed no sonet tractatos moderatius, ei nam civibus euripidis. Est ex amet persius dissentiet, eu agam putent feugiat eos. Vis modus reformidans comprehensam eu, has eu veri minim mazim. Doctus quaeque blandit nec cu.', 'Partiendo explicari assueverit mel id, magna saperet fierent sed et. In pri erat corpora. Fuisset blandit consetetur usu cu, oratio primis adolescens mei ut. Pro ex mutat error, nam nusquam constituam no. Et reque labore officiis eos.', 'N/A'),
(6, 1, 'Juan', 'Lastarria', 'Alcayaga', '7.879.514-1', '1956-12-15', 75, 0, 'Av. Brasil 2241, Valparaíso', '+56948484884', 'FONASA', 'Pulmonía', 'Antibióticos, nebulizador, descanso de pana', 'N/A'),
(27, 6, 'Manuel', 'Rodriguez', 'Gonzalez', '12.671.916-k', '1993-12-15', 30, 0, 'Pasaje Saleciano 752, Quilpúe, Valparaiso', '+569123321744', 'ISAPRE', 'Ad probo errem vis, eu diceret vocibus conceptam sit, mei odio autem an. Atqui dolore consequuntur ius ne. Et atomorum iracundia duo, no inermis salutandi has. At vocent vidisse vel, case movet partem mei in. Nam ea tollit nonumy feugiat, sea ad quis vidit.', 'Suas numquam salutandi ei per, mea graeco principes persequeris et, nobis mandamus te nec. Et doctus diceret epicurei his, at usu possim mollis, has ex modus officiis. Quo in essent appareat. Partem albucius ad pro, vel ad dicit tation.', 'Ne discere equidem sit, et usu harum suscipiantur, te mea audiam vocibus deseruisse. Ex propriae liberavisse consectetuer pro, consul saperet antiopam ea mei, viris platonem vis ut.'),
(28, 3, 'Alejandra', 'Roldán', 'Rojas', '15.671.916-k', '1987-12-15', 36, 1, 'Avda Apoquindo 3076, Santiago', '+56974569742', 'FONASA', 'Sed graeci perpetua necessitatibus et, sit no summo causae mollis. Quaeque saperet dissentiet duo ea. Ad has idque erant honestatis, quo et nostro repudiandae. Usu amet quodsi gloriatur ad. At omnesque maiestatis vis.', 'Eum ne everti electram. Appellantur neglegentur no quo, in omnes quando nostrum vix. Ea delectus incorrupte nam, prima quidam at ius. Sit verear vituperata reformidans at. His ad eius cetero molestie. Eos eu blandit tacimates.', 'N/A'),
(29, 5, 'Javier', 'Pérez', 'Soto', '7.167.652-1', '1949-12-15', 74, 0, 'Avenida Santa Rosa, 3606, San Joaquín, Santiago', '+56974569742', 'FONASA', 'Quo ad salutatus vulputate, harum regione voluptatibus vix at. Has meliore nostrum atomorum at, odio nostrud dissentias et vix.', 'Legimus blandit ius eu, at nec diam urbanitas, malis bonorum prodesset cu pro. Modo volutpat consetetur quo ea. Ad ius dicit repudiandae. Cu movet accusamus quaerendum cum. Cu his alienum sensibus, has at quem vituperata.', 'In vis nobis dicam fierent, ea tincidunt conceptam vix, vis at viris quodsi deseruisse. At ullamcorper definitiones vel, est vero augue constituam at.'),
(30, 21, 'Armando', 'Rejas', 'Casas', '2.167.652-1', '1922-12-15', 101, 0, 'Avenida Siempre Viva, 742, Campo de Primavera', '+56913469785', 'FONASA', 'N/A', 'N/A', 'Id audiam aperiam vix. Ut eos elitr persius mandamus. Eam ad meis porro democritum, altera feugiat qui et. Harum audiam nec et, viris persius eligendi mea no. Amet alia ea mei, eam essent molestie voluptua ut, ei vis facer atomorum forensibus. Ne nec semper detracto. Nostrum convenire vel ea. Nam aeque expetendis ea, cu veri dolorem vix. Ne his eros illud admodum, ei mel quot dicant comprehensam, et usu detraxit aliquando referrentur. Agam appetere ad mel, vix te vero laoreet pertinacia. Mei nisl labores dolores et. Qui labitur appetere at, scripta sanctus petentium vix cu. Decore oblique saperet id pro, has legere tempor aperiam at, eos mazim dicam id.');

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `ID` int(11) NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `email` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `profession` varchar(100) NOT NULL,
  `password` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `isAdmin` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`ID`, `firstname`, `lastname`, `email`, `profession`, `password`, `isAdmin`) VALUES
(1, 'Juan', 'Alcayaga', 'juan.alcayaga.y@outlook.com', 'Médico', '$2b$10$tM0O.AlUQk/DTmRihOQjCuxBRn.pH28EbdyVxrQQBhoRbPnqDwQqG', 0),
(3, 'Andrés', 'Riquelme', 'andres.riquelme.i@gmail.com', 'Enfermero', '$2b$10$wnz6Cb2xO60PzudTAP0rzObLcn60UoUABiccv0Kwwer8.t5gi8qCa', 0),
(5, 'Javiera', 'Carrera', 'jcarrera868@outlook.com', 'Psicólogo', '$2b$10$xjBNxF0e8PbRnurJM2kTYOBlrMn03/1cLU6z4EIarivK.FV1cv/Mi', 0),
(6, 'Benjamín', 'Castro', 'benjacastro@gmail.com', 'N/A', '$2b$10$UzEdS0ThywRP3swuR8jGWOfj61PNlh1uHDLWQ3Dg7hv5Nvi5XRmtS', 1),
(7, 'Maya', 'Gutierrez', 'maya.gutierrez@gmail.com', 'Nutricionista', '$2b$10$JSxClTNOrbJR6mLNN8zrxudIjJUhQ//j94zdVOD6Pzm.EmKrFCtRG', 0),
(21, 'Francisca', 'Alcalde', 'fran.alcalde.t@hotmail.com', 'Médico', '$2b$10$BvYaqiC9ze7m6JE0sebWUuAPP3Sur00Zqa5mQAcqkKU5xX298WpHC', 0),
(23, 'Alberto', 'Harcha', 'alberto.harcha@gmail.com', 'Fisioterapeuta', '$2b$10$FwTOEcWZre3KiSqhYroQaebdRxGbzFUsJAf5BbQjDeL0jL8Uxu6tq', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Patients`
--
ALTER TABLE `Patients`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Patients`
--
ALTER TABLE `Patients`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
