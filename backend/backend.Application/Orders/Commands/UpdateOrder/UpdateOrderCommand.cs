using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using backend.Infrastructure.Data;
using MediatR;

namespace backend.Application.Orders.Commands.UpdateOrder
{
    public record UpdateOrderCommand(Guid Id, string OrderName, int Quantity, decimal UnitPrice) : IRequest<bool>;
    public class UpdateOrderCommandHandler : IRequestHandler<UpdateOrderCommand, bool>
    {
        private readonly ApplicationDbContext _context;

        public UpdateOrderCommandHandler(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<bool> Handle(UpdateOrderCommand request, CancellationToken cancellationToken)
        {
            var order = await _context.Orders.FindAsync(new object[] { request.Id }, cancellationToken);
            if (order is null)
            {
                return false;
            }

            order.OrderName = request.OrderName;
            order.Quantity = request.Quantity;
            order.UnitPrice = request.UnitPrice;

            _context.Orders.Update(order);
            await _context.SaveChangesAsync(cancellationToken);

            return true;
        }
    }
}
