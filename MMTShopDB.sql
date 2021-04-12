IF NOT EXISTS (SELECT name FROM sys.databases WHERE name = N'[MMTShopDB]')
BEGIN
	CREATE DATABASE [MMTShopDB];
END

--Create Category Table
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[MMTShopDB].[dbo].[Category]') AND type in (N'U'))
BEGIN
	CREATE TABLE [MMTShopDB].[dbo].[Category]
	(
		CategoryId int identity(1,1) NOT NULL,
		CategoryName varchar(500),
		PRIMARY KEY (CategoryId)
	)
END

INSERT INTO [MMTShopDB].dbo.Category ([CategoryName]) VALUES('Home');
INSERT INTO [MMTShopDB].dbo.Category ([CategoryName]) VALUES('Garden');
INSERT INTO [MMTShopDB].dbo.Category ([CategoryName]) VALUES('Electronics');
INSERT INTO [MMTShopDB].dbo.Category ([CategoryName]) VALUES('Fitness');
INSERT INTO [MMTShopDB].dbo.Category ([CategoryName]) VALUES('Toys');

--Create Product Table
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[MMTShopDB].[dbo].[Product]') AND type in (N'U'))
BEGIN
	CREATE TABLE [MMTShopDB].[dbo].[Product]
	(
		ProductId int identity(1,1) NOT NULL,
		ProductName varchar(500),
		SKU varchar(10),
		Deascription varchar(500),
		Price [decimal](9, 2) NOT NULL,
		CategoryId [int] NOT NULL,
		PRIMARY KEY (ProductId)
	)
END

IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[MMTShopDB].[dbo].[FK_Product_Category_CategoryId]') 
AND parent_object_id = OBJECT_ID(N'[MMTShopDB].[dbo].[Category]'))
ALTER TABLE [MMTShopDB].[dbo].[Product]  WITH CHECK ADD  CONSTRAINT [FK_Product_Category_CategoryId] FOREIGN KEY([CategoryId])
REFERENCES [MMTShopDB].[dbo].[Category] ([CategoryId]);

INSERT INTO [dbo].[Product]([ProductName], [SKU],[Deascription],[Price],[CategoryId])
VALUES ('Candles', '1SGJKN', 'Vanilla and Honey Jar', 8.9, 1);
INSERT INTO [dbo].[Product]([ProductName], [SKU],[Deascription],[Price],[CategoryId])
VALUES ('Photo Frames', '1DJFGJ', 'Metal curve', 15.9, 1);

INSERT INTO [dbo].[Product]([ProductName], [SKU],[Deascription],[Price],[CategoryId])
VALUES ('Outdoor Firelights', '2SGJKN', 'Odureless', 2.0, 2);
INSERT INTO [dbo].[Product]([ProductName], [SKU],[Deascription],[Price],[CategoryId])
VALUES ('Electric pump', '2YUION', 'Carousal AC/DC', 12.0, 2);

INSERT INTO [dbo].[Product]([ProductName], [SKU],[Deascription],[Price],[CategoryId])
VALUES ('Iron', '3SGJKN', 'Powesteam', 34.0, 3);
INSERT INTO [dbo].[Product]([ProductName], [SKU],[Deascription],[Price],[CategoryId])
VALUES ('Toaster', '3JGJGKJ', 'stainless steel', 16.0, 3);

INSERT INTO [dbo].[Product]([ProductName], [SKU],[Deascription],[Price],[CategoryId])
VALUES ('Tradmill', '4SGJKN', 'slim fold', 299.0, 4);
INSERT INTO [dbo].[Product]([ProductName], [SKU],[Deascription],[Price],[CategoryId])
VALUES ('Dmbbells', '4SKJKN', 'chrome Iron', 50.0, 4);

INSERT INTO [dbo].[Product]([ProductName], [SKU],[Deascription],[Price],[CategoryId])
VALUES ('Lego', '5SGJKN', 'Wonder City', 18.99, 5);
INSERT INTO [dbo].[Product]([ProductName], [SKU],[Deascription],[Price],[CategoryId])
VALUES ('Toy car', '5SGJKN', 'sport next', 8.99, 5);


