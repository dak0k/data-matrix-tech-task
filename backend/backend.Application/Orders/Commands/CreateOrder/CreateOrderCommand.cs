using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using backend.Domain.Entities;
using backend.Infrastructure.Data;
using MediatR;

namespace backend.Application.Orders.Commands.CreateOrder
{
    public record CreateOrderCommand : IRequest<Guid>
    {
        [Required]
        public string OrderName { get; init; } = string.Empty;

        [Range(1, int.MaxValue, ErrorMessage = "Количество должно быть больше 0")]
        public int Quantity { get; init; }

        [Range(0.01, double.MaxValue, ErrorMessage = "Цена должна быть больше 0")]
        public decimal UnitPrice { get; init; }
    }
    public class CreateOrderCommandHandler : IRequestHandler<CreateOrderCommand, Guid>
    {
        private readonly ApplicationDbContext _context;

        public CreateOrderCommandHandler(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Guid> Handle(CreateOrderCommand request, CancellationToken cancellationToken)
        {
            var order = new Order
            {
                Id = Guid.NewGuid(),
                OrderName = request.OrderName,
                Quantity = request.Quantity,
                UnitPrice = request.UnitPrice
            };

            await _context.Orders.AddAsync(order);
            await _context.SaveChangesAsync(cancellationToken);

            return order.Id;
        }
    }
}
