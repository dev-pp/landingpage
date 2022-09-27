import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalMediaComponent } from './digital-media.component';

describe('DigitalMediaComponent', () => {
  let component: DigitalMediaComponent;
  let fixture: ComponentFixture<DigitalMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalMediaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
