import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecCategoryComponent } from './spec-category.component';

describe('SpecCategoryComponent', () => {
  let component: SpecCategoryComponent;
  let fixture: ComponentFixture<SpecCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecCategoryComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
