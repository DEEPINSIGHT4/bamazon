CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products (
id int auto_increment not null,
product_name varchar (45) not null,
product_sales decimal(10,2) not null,
department_name varchar(45) not null,
price decimal(10,2) not null,
stock_quantity int (10)not null,
primary key(id)
);

select * from products;

insert into products (product_name,product_sales,department_name,price,stock_quantity);
values ("wine",0,"food and drinks",34,50);
		("puma shoes",0,"sports",97,90);
		("blender",0,"sports",45,70);
		("sparkling water",0,"food and drinks",10,45);
		("addidas short",0,"sports",35,56);
		("beats headphone",0,"electronic",200,34);
		("kindle tablet",0,"electronic",300,56);
		("facial tissues",0,"home and kitchen",24,46);
		("foam matress",0,"home and kitchen",250,45);
		("oral care pack",0,"health and grooming",36,67);
