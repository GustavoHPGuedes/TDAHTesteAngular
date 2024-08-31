import { Component, Input } from '@angular/core';

@Component
({
  selector: 'app-texto-painel',
  standalone: true,
  imports: [],
  templateUrl: './texto-painel.component.html',
  styleUrl: './texto-painel.component.css'
})

export class TextoPainelComponent
{
  @Input() texto: string = "texto de teste"
}
