import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureOrdersAddButtonComponent } from './feature-orders-add-button.component';

describe('FeatureOrdersAddButtonComponent', () => {
  let component: FeatureOrdersAddButtonComponent;
  let fixture: ComponentFixture<FeatureOrdersAddButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureOrdersAddButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureOrdersAddButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
