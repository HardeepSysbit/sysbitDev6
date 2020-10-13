import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsbComponent } from './esb.component';

describe('EsbComponent', () => {
  let component: EsbComponent;
  let fixture: ComponentFixture<EsbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
