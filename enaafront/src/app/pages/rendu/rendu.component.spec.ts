import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenduComponent } from './rendu.component';

describe('RenduComponent', () => {
  let component: RenduComponent;
  let fixture: ComponentFixture<RenduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RenduComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
