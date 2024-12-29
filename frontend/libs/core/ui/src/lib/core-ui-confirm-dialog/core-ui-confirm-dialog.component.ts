import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';

@Component({
  selector: 'lib-core-ui-confirm-dialog',
  imports: [
    CommonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
  ],
  templateUrl: './core-ui-confirm-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoreUiConfirmDialogComponent {
  public data: { dialogText: string } = inject(MAT_DIALOG_DATA);
  public dialogText: string = this.data.dialogText;

  // private dialogRef = inject(MatDialogRef<CoreUiConfirmDialogComponent, boolean>)
  constructor(
    private dialogRef: MatDialogRef<CoreUiConfirmDialogComponent, boolean>
  ) {}

  confirm() {
    this.dialogRef.close(true);
  }

  cancel() {
    this.dialogRef.close(false);
  }
}
