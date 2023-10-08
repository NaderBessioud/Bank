import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptecourrantComponent } from './comptecourrant.component';

describe('ComptecourrantComponent', () => {
  let component: ComptecourrantComponent;
  let fixture: ComponentFixture<ComptecourrantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComptecourrantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComptecourrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
