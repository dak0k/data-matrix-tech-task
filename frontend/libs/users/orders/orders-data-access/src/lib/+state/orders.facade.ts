import { inject, Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as OrdersSelector from './orders.selectors';
import { OrdersActions } from './orders.actions';
import { OrderCreate } from '../models/orders.model';

@Injectable({ providedIn: 'root' })
export class OrdersFacade {
  private readonly store = inject(Store);

  public readonly status$ = this.store.pipe(select(OrdersSelector.selectOrdersStatus));
  public readonly allOrders$ = this.store.pipe(select(OrdersSelector.selectOrders));
  public readonly errors$= this.store.pipe(select(OrdersSelector.selectOrdersError));

  init() {
    this.store.dispatch(OrdersActions.loadOrders());
  }
  deleteOrder(id: string) {
    this.store.dispatch(OrdersActions.deleteOrder({ id }))
  }

  addOrder(order: OrderCreate) {
    this.store.dispatch(OrdersActions.addOrder({ order }))
  }
}
