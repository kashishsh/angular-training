import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderstandingLifecycleHooksComponent } from './understanding-lifecycle-hooks.component';

describe('UnderstandingLifecycleHooksComponent', () => {
  let component: UnderstandingLifecycleHooksComponent;
  let fixture: ComponentFixture<UnderstandingLifecycleHooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnderstandingLifecycleHooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderstandingLifecycleHooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
