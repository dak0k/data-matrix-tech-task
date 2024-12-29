import { createFeatureSelector, createSelector } from '@ngrx/store';
import { OrdersState } from './orders.reducer';

export const selectOrdersState = createFeatureSelector<OrdersState>('orders');

export const selectOrders = createSelector(selectOrdersState, (state : OrdersState) => state.orders);
export const selectOrdersStatus = createSelector(selectOrdersState, (state : OrdersState) => state.status)
export const selectOrdersError = createSelector(selectOrdersState, (state : OrdersState) => state.error)
