import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailListComponent } from './fail-list.component';

describe('FailListComponent', () => {
  let component: FailListComponent;
  let fixture: ComponentFixture<FailListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
