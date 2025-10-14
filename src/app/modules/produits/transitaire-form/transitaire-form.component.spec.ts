import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitaireFormComponent } from './transitaire-form.component';

describe('TransitaireFormComponent', () => {
  let component: TransitaireFormComponent;
  let fixture: ComponentFixture<TransitaireFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransitaireFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransitaireFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
