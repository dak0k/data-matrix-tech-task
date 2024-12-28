using backend.Application.Orders.Commands.CreateOrder;
using backend.Application.Orders.Commands.DeleteOrder;
using backend.Application.Orders.Commands.UpdateOrder;
using backend.Application.Orders.Queries.GetOrders;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IMediator _mediator;

        public OrderController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var query = new GetOrdersQuery();
            var result = await _mediator.Send(query);
            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateOrderCommand command)
        {
            var orderId = await _mediator.Send(command);
            return CreatedAtAction(nameof(Get), new { id = orderId }, orderId); 
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(Guid id, [FromBody] UpdateOrderCommand command)
        {
            if (id != command.Id)
            {
                return BadRequest("Order ID mismatch");
            }

            var result = await _mediator.Send(command);
            if (!result)
            {
                return NotFound();
            }
            return NoContent();  
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            var command = new DeleteOrderCommand(id);
            var result = await _mediator.Send(command);
            if (!result)
            {
                return NotFound();
            }
            return NoContent();  
        }
    }
}
