import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptetitreComponent } from './comptetitre.component';

describe('ComptetitreComponent', () => {
  let component: ComptetitreComponent;
  let fixture: ComponentFixture<ComptetitreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComptetitreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComptetitreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
