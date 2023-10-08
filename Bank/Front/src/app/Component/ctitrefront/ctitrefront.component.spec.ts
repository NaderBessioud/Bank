import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtitrefrontComponent } from './ctitrefront.component';

describe('CtitrefrontComponent', () => {
  let component: CtitrefrontComponent;
  let fixture: ComponentFixture<CtitrefrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtitrefrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtitrefrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
