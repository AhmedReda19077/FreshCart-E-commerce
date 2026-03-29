import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecBrandComponent } from './spec-brand.component';

describe('SpecBrandComponent', () => {
  let component: SpecBrandComponent;
  let fixture: ComponentFixture<SpecBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecBrandComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecBrandComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
