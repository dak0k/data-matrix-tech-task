import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDTO } from '@frontend/orders-data-access';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable
} from '@angular/material/table';

@Component({
  selector: 'lib-feature-orders-list',
  imports: [
    CommonModule,
    MatTable,
    MatHeaderCell,
    MatColumnDef,
    MatCell,
    MatCellDef,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    MatHeaderRowDef,
    MatHeaderCellDef,
  ],
  templateUrl: './feature-orders-list.component.html',
  styleUrl: './feature-orders-list.component.css',
  standalone: true,
})
export class FeatureOrdersListComponent {
  @Input({ required: true }) orders!: OrderDTO[];
  @Output() deleteOrder = new EventEmitter();
  onDeleteOrder(order: OrderDTO) {
    this.deleteOrder.emit(order);
  }
}
