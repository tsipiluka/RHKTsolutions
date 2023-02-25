import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescribitionCardComponent } from './describition-card.component';

describe('DescribitionCardComponent', () => {
  let component: DescribitionCardComponent;
  let fixture: ComponentFixture<DescribitionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescribitionCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescribitionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
