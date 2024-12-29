import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureOrdersCreateComponent } from './feature-orders-create.component';

describe('FeatureOrdersCreateComponent', () => {
  let component: FeatureOrdersCreateComponent;
  let fixture: ComponentFixture<FeatureOrdersCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureOrdersCreateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureOrdersCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
