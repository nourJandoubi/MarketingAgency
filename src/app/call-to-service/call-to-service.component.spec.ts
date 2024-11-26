import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallToServiceComponent } from './call-to-service.component';

describe('CallToServiceComponent', () => {
  let component: CallToServiceComponent;
  let fixture: ComponentFixture<CallToServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallToServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallToServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
