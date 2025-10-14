import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitaireHeaderComponent } from './transitaire-header.component';

describe('TransitaireHeaderComponent', () => {
  let component: TransitaireHeaderComponent;
  let fixture: ComponentFixture<TransitaireHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransitaireHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransitaireHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
