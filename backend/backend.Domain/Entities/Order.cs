using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using backend.Domain.Common;

namespace backend.Domain.Entities
{
    [Table("Orders")]
    public class Order : BaseEntity
    {   
        [Required]
        [MaxLength(100)]
        public required string OrderName { get; set; }

        [Required]
        [Range(1, int.MaxValue, ErrorMessage = "Quantity must be at least 1.")]
        public int Quantity { get; set; }

        [Required]
        [Range(0.01, double.MaxValue, ErrorMessage = "Unit Price must be greater than 0.")]
        [Column(TypeName = "decimal(18,2)")]
        public decimal UnitPrice { get; set; }

    }
}
