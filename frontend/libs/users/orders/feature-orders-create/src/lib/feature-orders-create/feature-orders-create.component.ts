import { Component, Inject, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButton, MatFabButton } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import { MatFormField, MatInput, MatError } from '@angular/material/input';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'lib-feature-orders-create',
  imports: [
    CommonModule,
    MatFabButton,
    MatDialogTitle,
    MatDialogContent,
    MatInput,
    MatDialogActions,
    MatButton,
    MatFormField,
    MatError,
    ReactiveFormsModule,
  ],
  templateUrl: './feature-orders-create.component.html',
  styleUrl: './feature-orders-create.component.css',
  standalone: true,
})
export class FeatureOrdersCreateComponent {
  public formGroup: FormGroup;
  private formBuilder = inject(FormBuilder);
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { orderName: string; quantity: number; unitPrice: number },
    private dialogRef: MatDialogRef<FeatureOrdersCreateComponent>
  ) {
    this.formGroup = this.formBuilder.group({
      orderName: ['', Validators.required],
      quantity: ['', Validators.required],
      unitPrice: ['', Validators.required],
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }

  save(): void {
    if (this.formGroup.valid) {
      const formData = {
        orderName: this.formGroup.value.orderName,
        quantity: this.formGroup.value.quantity,
        unitPrice: this.formGroup.value.unitPrice
      };
      this.dialogRef.close(formData);
    }
  }
}
