import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetslearnscratchComponent } from './letslearnscratch.component';

describe('LetslearnscratchComponent', () => {
  let component: LetslearnscratchComponent;
  let fixture: ComponentFixture<LetslearnscratchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetslearnscratchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LetslearnscratchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
