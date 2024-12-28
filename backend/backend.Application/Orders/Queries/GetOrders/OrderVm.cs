using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using backend.Domain.Entities;

namespace backend.Application.Orders.Queries.GetOrders
{
    public class OrderVm
    {
        public Guid Id { get; init; }
        public required string OrderName { get; init; }

        public int Quantity { get; init; }
        public decimal UnitPrice { get; init; }
        public decimal TotalPrice => Quantity * UnitPrice;
        private class Mapping : Profile
        {
            public Mapping()
            {
                CreateMap<Order, OrderVm>();
            }
        }
    }
}
