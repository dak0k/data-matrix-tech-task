import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureOrdersListContainerComponent } from './feature-orders-list-container.component';

describe('FeatureOrdersListContainerComponent', () => {
  let component: FeatureOrdersListContainerComponent;
  let fixture: ComponentFixture<FeatureOrdersListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureOrdersListContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureOrdersListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
