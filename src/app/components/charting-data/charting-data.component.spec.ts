import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartingDataComponent } from './charting-data.component';

describe('ChartingDataComponent', () => {
  let component: ChartingDataComponent;
  let fixture: ComponentFixture<ChartingDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartingDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
