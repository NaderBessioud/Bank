import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichedetailssimComponent } from './affichedetailssim.component';

describe('AffichedetailssimComponent', () => {
  let component: AffichedetailssimComponent;
  let fixture: ComponentFixture<AffichedetailssimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichedetailssimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichedetailssimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
