import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BePartOfItComponent } from './be-part-of-it.component';

describe('BePartOfItComponent', () => {
  let component: BePartOfItComponent;
  let fixture: ComponentFixture<BePartOfItComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BePartOfItComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BePartOfItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
