import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowdayComponent } from './showday.component';

describe('ShowdayComponent', () => {
  let component: ShowdayComponent;
  let fixture: ComponentFixture<ShowdayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowdayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
