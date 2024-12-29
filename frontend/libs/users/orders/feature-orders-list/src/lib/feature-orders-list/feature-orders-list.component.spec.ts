import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureOrdersListComponent } from './feature-orders-list.component';

describe('FeatureOrdersListComponent', () => {
  let component: FeatureOrdersListComponent;
  let fixture: ComponentFixture<FeatureOrdersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureOrdersListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureOrdersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
