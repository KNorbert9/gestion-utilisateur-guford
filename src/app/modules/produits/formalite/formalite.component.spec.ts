import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaliteComponent } from './formalite.component';

describe('FormaliteComponent', () => {
  let component: FormaliteComponent;
  let fixture: ComponentFixture<FormaliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormaliteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormaliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
