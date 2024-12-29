import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersFacade } from '../../../orders-data-access/src/lib/+state/orders.facade';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatProgressBar } from '@angular/material/progress-bar';
import { FeatureOrdersListComponent } from '@frontend/feature-orders-list';
import { OrderDTO } from '@frontend/orders-data-access';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CoreUiConfirmDialogComponent } from '@frontend/ui';
import { tap } from 'rxjs';
import { LetDirective } from '@ngrx/component';
import { FeatureOrdersAddButtonComponent } from '@frontend/feature-orders-create';

@Component({
  selector: 'lib-feature-orders-list-container',
  imports: [
    CommonModule,
    MatProgressBar,
    FeatureOrdersListComponent,
    LetDirective,
    FeatureOrdersAddButtonComponent,
  ],
  templateUrl: './feature-orders-list-container.component.html',
  styleUrl: './feature-orders-list-container.component.css',
})
export class FeatureOrdersListContainerComponent implements OnInit {
  public orderFacade = inject(OrdersFacade);

  public readonly orders$ = this.orderFacade.allOrders$;
  public readonly status$ = this.orderFacade.status$;
  public readonly errors$ = this.orderFacade.errors$;

  private readonly dialog = inject(MatDialog);
  private readonly destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.orderFacade.init();
  }

  public deleteOrder(order: OrderDTO): void {
    const dialogRef: MatDialogRef<CoreUiConfirmDialogComponent> =
      this.dialog.open(CoreUiConfirmDialogComponent, {
        data: {
          dialogText: `You want to delete ${order.orderName} ?`,
        },
      });

    dialogRef
      .afterClosed()
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        tap((result: boolean) => {
          if (result) this.orderFacade.deleteOrder(order.id);
        })
      )
      .subscribe();
  }
}
