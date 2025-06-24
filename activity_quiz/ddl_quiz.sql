SHOW DATABASES;

CREATE DATABASE lab_act_4;

USE lab_act_4;

#Creating a table for customer.
CREATE TABLE customer(
	user_id INT,
	first_name VARCHAR(100),
    last_name VARCHAR(100),
    address VARCHAR(100),
    email VARCHAR(100),
    birthday DATE,
    phone_number INT,
    date_created DATE
);

ALTER TABLE customer
MODIFY COLUMN first_name VARCHAR(100) NOT NULL,
MODIFY COLUMN last_name VARCHAR(100) NOT NULL;

DESC customer;

#Creating a table for product.
CREATE TABLE product(
	product_id INT,
	price INT,
    quantity INT,
    stock INT,
    description VARCHAR(100),
    date DATE
);

DESC product;

#Creating a table for distributor.
CREATE TABLE distributor(
	distributor_id INT,
	product_id INT,
    shop_address VARCHAR(100),
    shop_name VARCHAR(100),
    shop_contact VARCHAR(100)
);

DESC distributor;