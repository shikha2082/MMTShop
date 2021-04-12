using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MMTShop.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MMTShop.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CategoryController : ControllerBase
    {
        [HttpGet]
        public JsonResult Get()
        {
            using (var context = new MMTShopDBContext())
            {
                return new JsonResult(context.Categories.ToList());
            }
        }

        [HttpPost]
        public JsonResult Post(Category category)
        {
            using (var context = new MMTShopDBContext())
            {
                context.Add(category);
                context.SaveChanges();
                return new JsonResult("Added successfully!");
            }
        }

        [HttpPut]
        public JsonResult Put(Category category)
        {
            using (var context = new MMTShopDBContext())
            {
                context.Update(category);
                context.SaveChanges();
                return new JsonResult("Updated successfully!");
            }
        }

        [HttpDelete("{categoryId}")]
        public JsonResult Delete(int categoryId)
        {
            using (var context = new MMTShopDBContext())
            {
                Category category = context.Categories.FirstOrDefault(p => p.CategoryId == categoryId);
                context.Remove(category);
                context.SaveChanges();
                return new JsonResult("Deleted successfully!");
            }
        }
    }
}
