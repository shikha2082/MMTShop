CREATE PROCEDURE [dbo].[GetProductRange] @id int
AS
BEGIN
SELECT  * From dbo.Product
where CategoryId = @id
END;
GO
