import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClonebodyComponent } from './clonebody.component';

describe('ClonebodyComponent', () => {
  let component: ClonebodyComponent;
  let fixture: ComponentFixture<ClonebodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClonebodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClonebodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
