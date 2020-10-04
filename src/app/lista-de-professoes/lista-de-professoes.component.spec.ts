import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeProfessoesComponent } from './lista-de-professoes.component';

describe('ListaDeProfessoesComponent', () => {
  let component: ListaDeProfessoesComponent;
  let fixture: ComponentFixture<ListaDeProfessoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDeProfessoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeProfessoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
