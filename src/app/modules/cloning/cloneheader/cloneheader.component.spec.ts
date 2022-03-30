import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloneheaderComponent } from './cloneheader.component';

describe('CloneheaderComponent', () => {
  let component: CloneheaderComponent;
  let fixture: ComponentFixture<CloneheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloneheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloneheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
