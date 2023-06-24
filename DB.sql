-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 24, 2023 at 06:12 AM
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
  `observations` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_nopad_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Patients`
--

INSERT INTO `Patients` (`ID`, `firstname`, `middlename`, `lastname`, `rut`, `birthdate`, `age`, `gender`, `address`, `phone`, `insurance`, `diagnostics`, `treatments`, `observations`) VALUES
(1, 'Rosa', 'Fernandez', 'Valenzuela', '3.724.410-4', '1926-07-12', 97, 1, 'Eleuterio Ramirez 741, Región Metropolitana de Santiago', '+569 9864 0429', 'FONASA', 'Ea solum meliore salutandi quo, vis cu idque semper. Ei mollis appetere eos. Novum dicant graece at qui, pri ad sale percipitur. Vis eu dolore audire prompta, mel ne dico vocibus. Duo no suas dicunt viderer.\r\n\r\nNo cetero iisque concludaturque usu. Has te regione conclusionemque, assum consulatu cum cu. Tale laudem aliquip mel ex, novum noster quo in. Ea probatus signiferumque vix, nam partiendo iudicabit ei. Liber dicit persequeris vis an, no duo odio inermis consulatu, et principes gubergren tincidunt mel. Eam novum animal efficiantur te.', 'Quod quodsi praesent id nam, usu dignissim mediocritatem ex. Ea sed eirmod mandamus. Ex omnesque deterruisset qui, vim copiosae reprehendunt an, eu novum legendos vis. \r\n\r\nNo mea nulla ancillae oportere. Iriure democritum ad vis, assum splendide mel et.', 'N/A'),
(2, 'Manuel', 'Ortega', 'Guzman', '4.653.645-2', '1934-08-14', 89, 0, 'Avenida Presidente Juan Antonio Ríos, 1080, Villarica', '+569 9045 9036', 'ISAPRE', 'At aeque doming habemus usu. At duis veniam sea, cu principes moderatius intellegebat sea, eum no delectus quaestio. Novum vocent oblique per te, dicit sanctus labores an nec. Usu ea vitae option.\r\n\r\nPro brute gubergren ne, per cibo maluisset gloriatur ex. Sed dico posse hendrerit no, nec oblique recusabo omittantur et. Liber consul melius in his, nostro integre iudicabit mel no. Dicunt interesset nam ad. At mel eleifend salutatus omittantur, sed docendi noluisse convenire ex. Ipsum movet admodum eum ne, vel ea dico docendi referrentur.', 'Eum ea insolens delicatissimi. Ei qui nonumy mollis, quo atqui scripta in. Alienum scribentur philosophia at vel, te tritani delicata scriptorem vis. Eos et praesent accusamus. Id qui aeque essent debitis, mei te omnis placerat pertinacia.', 'Ad vel iracundia philosophia, an minim paulo delectus sit. Mel eu rebum adolescens, illud etiam mei no. Eu deseruisse intellegam quo. Vix in mutat malorum aliquid, zril torquatos ius ea, ea nulla aliquid mel. Id sed soleat oblique iudicabit, sea amet causae alterum id. Quo atqui assum vituperatoribus ut, paulo referrentur ex quo. In sit delectus omittantur, fierent mandamus reformidans te eos, civibus ocurreret disputando per et.'),
(3, 'Valentina', 'Espinoza', 'Almeida', '7.595.313-5', '1950-03-30', 73, 1, 'Uno Norte 461 Of. 506, Viña del Mar', '+569 9894 3527', 'ISAPRE', 'In habemus fuisset denique quo, iuvaret legendos cotidieque ei per, vis ei quas postea. Sed no sonet tractatos moderatius, ei nam civibus euripidis. Est ex amet persius dissentiet, eu agam putent feugiat eos. Vis modus reformidans comprehensam eu, has eu veri minim mazim. Doctus quaeque blandit nec cu.', 'Partiendo explicari assueverit mel id, magna saperet fierent sed et. In pri erat corpora. Fuisset blandit consetetur usu cu, oratio primis adolescens mei ut. Pro ex mutat error, nam nusquam constituam no. Et reque labore officiis eos.', 'N/A'),
(4, 'Luigi', 'Ferrari', 'Masseria', '15.201.783-9', '1985-09-25', 38, 0, 'Avenida Central, 6272, Santiago', '+569 9815 0928', 'FONASA', 'Etiam assum timeam his id, te dicunt voluptatum ius, ad his utamur deterruisset. Sint omittam honestatis te eam, quo no magna legendos, ubique persecuti intellegebat at vis. Ne eius praesent reprehendunt cum, primis legimus ea vix. Mel percipit voluptatum ad. In ornatus voluptua appetere eos, ea mei euismod tacimates disputationi, vix nostrum inciderint reformidans ut. Vel nostro splendide ea.\r\n\r\nCum ex tritani recteque imperdiet, mel in doctus sanctus. Dolorum necessitatibus nam eu. Nam nulla quaeque ad, eu sit nisl mollis electram. Qui eu adhuc porro volutpat. \r\n\r\nNostrum perfecto adipiscing ut sea. At eos nominati democritum, mel augue quidam cetero cu. Pro ne tempor facilis delectus, fabulas oportere ne his. Et saepe nostro splendide nam, est corrumpit evertitur voluptatibus in. Has eius fierent ut.\r\n\r\nHarum verterem ullamcorper eum ei. No per idque epicuri fierent, reque appareat usu te, ex quot rebum feugiat per. Est id nibh pericula, eligendi consetetur ne vix, id velit suscipiantur quo. ', 'Fierent liberavisse ut ius, sit ut nibh dolor phaedrum. Nemore maiestatis cu nec, vim tacimates tractatos ex. Cu mel novum quando lucilius, ius tempor fabulas habemus no, summo nobis saepe est te. Cu mei solum munere dictas, dicit impetus quaeque vis eu. Vis no purto patrioque, vis ut consulatu consequuntur.', 'N/A'),
(5, 'Alejandra', 'Fernandez', 'Garcia', '18203262-k', '1995-06-13', 28, 1, 'Av Vicuña Mackenna 2600 Macul, Región Metropolitana de Santiago', '+569 8765 0524', 'FONASA', 'Ex pro sonet regione sententiae. Qui modo aperiri dissentiunt ut, vel mentitum persecuti ne. Cum ut ornatus labores intellegat, ad mel novum malorum aliquam.', 'Nostrud equidem splendide eu nec. Habeo consulatu duo ex. An sed consul repudiare, sea ad esse nulla, pri alterum tacimates ut. Idque dictas ius no, quando dissentiunt mea et, nihil fuisset oporteat usu cu.\r\n\r\nEam aperiam integre dolorem ut. Eum nisl verear nominati eu. Et quod ludus epicuri vim, ex saepe malorum vim. Justo graeci sadipscing nam ex, ludus senserit qui ad. Ius eu reque delenit, ius iusto dicit ex, sale delectus id his.', 'N/A'),
(6, 'Mario', 'Lamborghini', 'Soto', '7.063.272-1', '1951-01-31', 72, 0, 'Avda. Alonso De Córdova 5151 702, Lascondes Santiago', '+569 8204 1523', 'FONASA', 'Te ullamcorper intellegebat eum. Ne eum dico principes dissentias, pri nostrud temporibus ut. No veri dicit oblique est, altera adolescens quo te. Vidit error euripidis duo ex, no laudem periculis disputando his. Timeam petentium disputationi eum te, ut nemore iuvaret pri. Est ancillae conceptam quaerendum ex.', 'Ut eos omnis brute, postea impedit detracto duo ea. Duis ancillae moderatius eam at, cu mea tale omnes deterruisset, per unum falli ea. Te eum integre recusabo, solum phaedrum cum eu. Aeterno maluisset eloquentiam te usu. Sed eu accusata accommodare complectitur, eum ignota suscipit ex.', 'Est summo populo aliquam ne, invidunt salutatus eum in. Nibh option reprimique pri ea, postulant necessitatibus vix et, id epicuri probatus dissentias usu. Fabulas scripserit ex his, qui illud movet indoctum te, at reque ubique adipiscing mei. Sed nominati vituperata concludaturque et, in has utroque erroribus constituam, tollit omittantur nam no. Ex mel numquam consetetur. Vim summo appareat volutpat ea, eam audire praesent temporibus ex, eam in novum erant mucius.\r\n\r\nSaperet alienum pertinax sit in. Dictas malorum facilisis vel ex, in illum etiam vim, vel munere salutatus ad. Mel in aliquip senserit, pro cu vitae facilis. Id verear audire abhorreant pri, his detraxit honestatis in, id mea illum noluisse disputationi. Scaevola accusamus temporibus eum ei, reprimique scripserit usu cu, has nisl affert essent at. Quo ex odio atqui erroribus.');

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
(1, 'Juan', 'Alcayaga', 'juan.alcayaga.y@outlook.com', 'Médico', 'Asd574sas5d7as464', 0),
(2, 'Fernanda', 'Matamala', 'f.matamala@hotmail.com', 'Enfermero', 'fmatamala123', 0),
(3, 'Andrés', 'Riquelme', 'andres.riquelme.i@gmail.com', 'Psicólogo', '12345asdfgh', 0),
(4, 'Jaime', 'Del Río', 'jdelrio@gmail.com', 'Médico', 'ad78ashd78ashd8', 0),
(5, 'Javiera', 'Muñoz', 'jmunoz868@outlook.com', 'Odontólogo', 'asd123', 0),
(6, 'Benjamín', 'Castro', 'benjacastro@gmail.com', 'N/A', 'ns8SDAdnqnlamkl19KSs', 1),
(7, 'Maya', 'Gutierrez', 'maya.gutierrez@gmail.com', 'Nutricionista', 'asd1123adzas', 0);

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
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
