import { OrderDTO } from '../models/orders.model';
import { LoadingStatus } from '@frontend/data-access';
import { createReducer, on } from '@ngrx/store';
import { OrdersActions } from './orders.actions';

export const ordersFeatureKey = 'orders';

export interface OrdersState {
  orders: OrderDTO[];
  status: LoadingStatus | string;
  error?: Error | null;
}

export const orderInitialState: OrdersState = {
  orders: [],
  status: 'init',
  error: null,
};

export const ordersReducer = createReducer(
  orderInitialState,
  on(OrdersActions.loadOrders, (state) => ({ ...state, status: 'loading'})),
  on(OrdersActions.loadOrdersSuccess, (state, { orders }) => ({
    ...state,
    orders,
    status: 'loaded',
  })),
  on(OrdersActions.loadOrdersFailure, (state, { error }) => ({
    ...state,
    error
  })),
  on(OrdersActions.deleteOrderSuccess, (state, { id }) => ({
    ...state,
    orders: state.orders.filter((order) => order.id !== id),
    status: 'loaded' as const,
  })),
  on(OrdersActions.deleteOrderFailure, (state, { error }) => ({
      ...state, status: 'error' as const, error
    })
  ),
  on(OrdersActions.addOrderSuccess, (state, { order }) => ({
    ...state,
    orders: [...state.orders, order],
  })),
  on(OrdersActions.addOrderFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);
