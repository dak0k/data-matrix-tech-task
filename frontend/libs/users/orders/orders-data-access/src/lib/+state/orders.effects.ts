import { Actions, createEffect, ofType } from '@ngrx/effects';
import { inject } from '@angular/core';
import { ApiService } from '@frontend/http';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { OrdersActions } from './orders.actions';
import { OrderCreate, OrderDTO } from '../models/orders.model';

export const loadOrders$ = createEffect(
  () => {
    const actions$ = inject(Actions);
    const apiService = inject(ApiService);
    return actions$.pipe(
      ofType(OrdersActions.loadOrders),
      switchMap(() =>
        apiService.get<OrderDTO[]>('/Order').pipe(
          map((orders) =>
            OrdersActions.loadOrdersSuccess({ orders })
          ),
          catchError((error) => {
            console.error('Error', error);
            return of(OrdersActions.loadOrdersFailure({ error }));
          })
        )
      )
    );
  },
  { functional: true }
);
export const deleteOrder = createEffect(
  () => {
    const action$ = inject(Actions);
    const apiService = inject(ApiService);

    return action$.pipe(
      ofType(OrdersActions.deleteOrder),
      tap(({ id }) => console.log('Delete order started with ID:', id)),
      switchMap(({ id }) =>
        apiService.delete<void>(`/Order/${id}`).pipe(
          map(() => {
            console.log('Delete order succeeded for ID:', id);
            return OrdersActions.deleteOrderSuccess({ id });
          }),
          catchError((error) => {
            console.error('Error during delete order:', error);
            return of(OrdersActions.deleteOrderFailure({ error }));
          })
        )
      )
    );
  },
  { functional: true }
);

export const addOrder = createEffect(
  () => {
    const actions$ = inject(Actions);
    const apiService = inject(ApiService);

    return actions$.pipe(
      ofType(OrdersActions.addOrder),
      switchMap(({ order }) =>
        apiService.post<OrderDTO, OrderCreate>('/Order', order).pipe(
          map((newOrder) =>
            OrdersActions.addOrderSuccess({ order: newOrder })
          ),
          catchError((error) => {
            console.log('Error', error);
            return of(OrdersActions.addOrderFailure({ error }))
          })
        )
      ))
  }, {functional: true}
)
