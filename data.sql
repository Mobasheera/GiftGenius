-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: localhost    Database: gift_recommendation
-- ------------------------------------------------------
-- Server version	8.0.41

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (5,'Books & Stationery'),(3,'Fashion & Accessories'),(6,'Health & Wellness'),(2,'Home & Living'),(4,'Sports & Outdoors'),(1,'Tech Gadgets');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `gift_requests`
--

LOCK TABLES `gift_requests` WRITE;
/*!40000 ALTER TABLE `gift_requests` DISABLE KEYS */;
INSERT INTO `gift_requests` VALUES (1,NULL,'John Doe','Friend','Birthday','Young Adult (20-29)','Male','Gaming, Technology',2000,10000,'Prefers latest gadgets','2025-03-22 09:28:45'),(2,NULL,'Sarah Smith','Partner','Anniversary','Adult (30-49)','Female','Fashion, Jewelry',5000,20000,'Loves designer accessories','2025-03-22 09:28:45'),(3,NULL,'David Johnson','Family','Graduation','Teen (13-19)','Male','Books, Music',1000,5000,'Enjoys reading and playing guitar','2025-03-22 09:28:45'),(4,NULL,'Emma Brown','Colleague','Farewell','Middle Age (50-64)','Female','Home Decor, Gardening',1500,8000,'Moving to a new house','2025-03-22 09:28:45'),(5,NULL,'Michael Lee','Friend','Wedding','Adult (30-49)','Male','Sports, Fitness',3000,15000,'Plays tennis regularly','2025-03-22 09:28:45'),(6,NULL,'John Doe','Friend','Birthday','Young Adult (20-29)','Male','Gaming, Technology',2000,10000,'Prefers latest gadgets','2025-03-22 09:28:56');
/*!40000 ALTER TABLE `gift_requests` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `gifts`
--

LOCK TABLES `gifts` WRITE;
/*!40000 ALTER TABLE `gifts` DISABLE KEYS */;
INSERT INTO `gifts` VALUES (1,'Apple Watch Series 8',1,41999.00,'Advanced smartwatch with health tracking and notifications.','https://picsum.photos/400/320?random=10','https://www.amazon.in/Apple-Watch-Space-Grey-Aluminium/dp/B0BDJ6ZMCC/',4.8,1234,'2025-03-22 09:28:21'),(2,'Apple AirPods Pro',1,24999.00,'Active noise cancellation and spatial audio.','https://picsum.photos/400/320?random=11','https://www.amazon.in/Apple-AirPods-Pro-Active-Cancellation/dp/B0BDJ6ZMCC/',4.6,856,'2025-03-22 09:28:21'),(3,'Philips Smart LED Bulb',2,1999.00,'WiFi-enabled LED bulb with 16 million colors.','https://picsum.photos/400/320?random=13','https://www.amazon.in/Philips-WiFi-Enabled-Color-Changing-Bulb/dp/B0BDJ6ZMCC/',4.5,789,'2025-03-22 09:28:21'),(4,'Urban Forest Leather Wallet',3,1999.00,'Genuine leather wallet with multiple card slots.','https://picsum.photos/400/320?random=16','https://www.amazon.in/Urban-Forest-Leather-Wallet-Brown/dp/B0BDJ6ZMCC/',4.8,234,'2025-03-22 09:28:21'),(5,'Decathlon Yoga Mat',4,1499.00,'Non-slip yoga mat with carrying strap.','https://picsum.photos/400/320?random=19','https://www.amazon.in/Anti-Slip-Yoga-Mat-Carrying-Strap/dp/B07P8QZ6KX/',4.7,456,'2025-03-22 09:28:21');
/*!40000 ALTER TABLE `gifts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `user_search_history`
--

LOCK TABLES `user_search_history` WRITE;
/*!40000 ALTER TABLE `user_search_history` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_search_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-03-22 22:55:58
