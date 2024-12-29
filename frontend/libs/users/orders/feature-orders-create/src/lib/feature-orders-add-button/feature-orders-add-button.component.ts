import { Component, DestroyRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { OrdersFacade } from '../../../../orders-data-access/src/lib/+state/orders.facade';
import { FeatureOrdersCreateComponent } from '../feature-orders-create/feature-orders-create.component';
import { OrderCreate } from '@frontend/orders-data-access';

@Component({
  selector: 'lib-feature-orders-add-button',
  imports: [CommonModule],
  templateUrl: './feature-orders-add-button.component.html',
  styleUrl: './feature-orders-add-button.component.css',
})
export class FeatureOrdersAddButtonComponent {
  private orderName!: string;
  private quantity!: number;
  private unitPrice!: number;
  public dialog = inject(MatDialog);
  private readonly ordersFacade = inject(OrdersFacade);
  private readonly destroyRef = inject(DestroyRef);

  openAddFolderDialog(): void {
    const dialogRef: MatDialogRef<FeatureOrdersCreateComponent> = this.dialog.open(FeatureOrdersCreateComponent, {
      data: { orderName: this.orderName },
    });

    dialogRef
      .afterClosed()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((result) => {
        if (result) {
          const newOrderData: OrderCreate = {
            orderName: result.orderName,
            quantity: result.quantity,
            unitPrice: result.unitPrice,
          };

          this.ordersFacade.addOrder(newOrderData);
        }
      });
  }
}
