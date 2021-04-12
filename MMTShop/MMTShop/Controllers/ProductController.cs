using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using MMTShop.Models;
using System;
using System.Collections.Generic;
using System.Linq;


namespace MMTShop.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductController : ControllerBase
    {
        [HttpGet]
        public JsonResult Get()
        {
            using (var context = new MMTShopDBContext())
            {
                return new JsonResult(context.Products.ToList());
            }
        }

        [HttpPost]
        public JsonResult Post(Product product)
        {
            using (var context = new MMTShopDBContext())
            {
                context.Add(product);
                context.SaveChanges();
                return new JsonResult("Added successfully!");
            }
        }

        [HttpPut]
        public JsonResult Put(Product product)
        {
            using (var context = new MMTShopDBContext())
            {
                context.Update(product);
                context.SaveChanges();
                return new JsonResult("Updated successfully!");
            }
        }

        [HttpDelete("{productId}")]
        public JsonResult Delete(int productId)
        {
            using (var context = new MMTShopDBContext())
            {
                Product product = context.Products.FirstOrDefault(p => p.ProductId == productId);
                context.Remove(product);
                context.SaveChanges();
                return new JsonResult("Deleted successfully!");
            }
        }

        [Route("GetAllCategoriesNames")]
        public JsonResult GetAllCategoriesNames()
        {
            using (var context = new MMTShopDBContext())
            {
                return new JsonResult(context.Categories.ToList());
            }
        }

        [Route("GetProductRangeByCategory/{categoryId}")]
        public JsonResult GetProductRangeByCategory(int categoryId)
        {
            using (var context = new MMTShopDBContext())
            {
                SqlParameter parameter = new SqlParameter("@id", categoryId);
                string sql = "EXECUTE [dbo].[GetProductRange] @id";
                List<Product> productRange = context.Products.FromSqlRaw(sql, parameter).ToList();
                return new JsonResult(productRange);
            }
        }
    }
}
