using System;
using System.Collections.Generic;

#nullable disable

namespace MMTShop.Models
{
    public partial class Product
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public string Sku { get; set; }
        public string Deascription { get; set; }
        public decimal Price { get; set; }
        public int CategoryId { get; set; }

        public virtual Category Category { get; set; }
    }
}
