CREATE TABLE Users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    userId VARCHAR(20) NOT NULL, 
    password VARCHAR(20) NOT NULL,
    name VARCHAR(20) NOT NULL,
    email VARCHAR(30),
    phonenumber VARCHAR(20)
);
