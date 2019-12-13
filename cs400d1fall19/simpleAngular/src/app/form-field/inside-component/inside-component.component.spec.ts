import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsideComponentComponent } from './inside-component.component';

describe('InsideComponentComponent', () => {
  let component: InsideComponentComponent;
  let fixture: ComponentFixture<InsideComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsideComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsideComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
