CREATE DATABASE bamazon
USE bamazon 
CREATE TABLE products (
item_id INTEGER (11) NOT NULL AUTO_INCREMENT PRIMARY KEY,

product_name VARCHAR(30) NOT NULL,
department_name VARCHAR (30) NOT NULL,
price DECIMAL(10,2) NOT NULL,
stock_quantity INTEGER(11) NOT NULL

)
 INSERT INTO products (product_name, department_name, price, stock_quantity)
 VALUES ("adidas WC 18 soccerball","equitpment", 85.00, 5), ("BRAZIL WC 18 Jersey", "apparel", 115.00, 7), ("Brazil WC 18 Jacket", "apparel", 95.00,9),("Brazil WC 18 scarf", "fan apparel",25,15), ("Brazil WC 18 shorts", "apparel",45.00,8), ("adidas WC 18 Russia Tournament shirt", "apparel",25.00,4), ("WC 18 Tournament infant Onsie","fan apparel",35.00,8),("WC 18 Women's Tournament T-shirt", "women apparel", 30.00, 15)
 
 
 SELECT * FROM products