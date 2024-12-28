using AutoMapper;
using AutoMapper.QueryableExtensions;
using backend.Application.Common.Models;
using backend.Infrastructure.Data;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace backend.Application.Orders.Queries.GetOrders
{
    public record GetOrdersQuery : IRequest<IEnumerable<OrderVm>> { };

    public class GetOrdersQueryHandler : IRequestHandler<GetOrdersQuery, IEnumerable<OrderVm>>
    {
        private readonly ApplicationDbContext _context;
        private readonly IMapper _mapper;

        public GetOrdersQueryHandler(ApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IEnumerable<OrderVm>> Handle(GetOrdersQuery request, CancellationToken cancellationToken)
        {
            return await _context.Orders
                .ProjectTo<OrderVm>(_mapper.ConfigurationProvider)
                .ToListAsync(cancellationToken);
        }
    }
}
