using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using backend.Infrastructure.Data;
using MediatR;

namespace backend.Application.Orders.Commands.DeleteOrder
{
    public record DeleteOrderCommand(Guid Id) : IRequest<bool>;
    public class DeleteOrderCommandHandler : IRequestHandler<DeleteOrderCommand, bool>
    {
        private readonly ApplicationDbContext _context;

        public DeleteOrderCommandHandler(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<bool> Handle(DeleteOrderCommand request, CancellationToken cancellationToken)
        {
            var order = await _context.Orders.FindAsync(new object[] { request.Id }, cancellationToken);
            if (order is null)
            {
                return false;
            }

            _context.Orders.Remove(order);
            await _context.SaveChangesAsync(cancellationToken);
            return true;
        }
    }
}
