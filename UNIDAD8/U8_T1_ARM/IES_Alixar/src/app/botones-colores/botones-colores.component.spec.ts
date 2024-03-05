import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesColoresComponent } from './botones-colores.component';

describe('BotonesColoresComponent', () => {
  let component: BotonesColoresComponent;
  let fixture: ComponentFixture<BotonesColoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonesColoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BotonesColoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
