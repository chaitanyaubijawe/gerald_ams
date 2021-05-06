CREATE TABLE `flight` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `to_airport_name` varchar(45) DEFAULT NULL,
  `from_airport_name` varchar(45) DEFAULT NULL,
  `delayed` boolean DEFAULT false,
  `status` varchar(45) DEFAULT NULL,
  `flight_hours` float DEFAULT NULL,
  PRIMARY KEY (`id`,`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



CREATE TABLE `airport` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `total_flight_capacity` int DEFAULT NULL,
  `current_flight_capacity` int DEFAULT NULL,
  `weather_status` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`,`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
