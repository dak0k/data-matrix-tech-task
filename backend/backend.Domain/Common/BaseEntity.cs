using System.ComponentModel.DataAnnotations;

namespace backend.Domain.Common;

public abstract class BaseEntity
{
    [Key]
    public Guid Id { get; set; }
}
