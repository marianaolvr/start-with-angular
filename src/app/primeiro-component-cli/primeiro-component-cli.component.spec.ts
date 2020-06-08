import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeiroComponentCliComponent } from './primeiro-component-cli.component';

describe('PrimeiroComponentCliComponent', () => {
  let component: PrimeiroComponentCliComponent;
  let fixture: ComponentFixture<PrimeiroComponentCliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeiroComponentCliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeiroComponentCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
