import { Component } from '@angular/core';

// Decoretor (@Component) => fala para o Angular que essa classe é um component
// Dentro do decoretor estão os metadados.

@Component({
  selector: 'app-meu-primeiro-component', // Seletor é o nome da TAG html
  template: `
      <p>Meu primeiro component com Angular 2!</p>
    `
})
export class MeuPrimeiroComponent { }



