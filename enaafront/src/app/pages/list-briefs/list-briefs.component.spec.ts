import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBriefsComponent } from './list-briefs.component';

describe('ListBriefsComponent', () => {
  let component: ListBriefsComponent;
  let fixture: ComponentFixture<ListBriefsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListBriefsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBriefsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
