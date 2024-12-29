import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { OrderCreate, OrderDTO} from '../models/orders.model';

export const OrdersActions = createActionGroup({
  source: 'Orders',
  events: {
    loadOrders: emptyProps(),
    loadOrdersSuccess: props<{ orders: OrderDTO[] }>(),
    loadOrdersFailure: props<{ error: Error }>(),

    addOrder: props<{order: OrderCreate}>(),
    addOrderSuccess: props<{order: OrderDTO}>(),
    addOrderFailure: props<{error: Error}>(),

    deleteOrder: props<{id: string}>(),
    deleteOrderSuccess: props<{id: string}>(),
    deleteOrderFailure: props<{error: Error}>(),

  }
});
