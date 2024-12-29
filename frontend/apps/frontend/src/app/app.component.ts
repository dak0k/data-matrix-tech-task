import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  FeatureOrdersListContainerComponent
} from '../../../../libs/users/orders/feature-orders-list/src/lib/feature-orders-list-container.component';

@Component({
  imports: [RouterModule, FeatureOrdersListContainerComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
  title = 'frontend';
}
