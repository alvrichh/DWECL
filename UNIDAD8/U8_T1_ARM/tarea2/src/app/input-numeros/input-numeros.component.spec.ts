import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputNumerosComponent } from './input-numeros.component';

describe('InputNumerosComponent', () => {
  let component: InputNumerosComponent;
  let fixture: ComponentFixture<InputNumerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputNumerosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputNumerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
