import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BePartOfItTwoComponent } from './be-part-of-it-two.component';

describe('BePartOfItTwoComponent', () => {
  let component: BePartOfItTwoComponent;
  let fixture: ComponentFixture<BePartOfItTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BePartOfItTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BePartOfItTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
