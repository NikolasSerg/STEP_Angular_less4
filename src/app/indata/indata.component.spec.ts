import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndataComponent } from './indata.component';

describe('IndataComponent', () => {
  let component: IndataComponent;
  let fixture: ComponentFixture<IndataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
