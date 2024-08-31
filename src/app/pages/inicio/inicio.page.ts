import { Component, OnInit } from '@angular/core';
import {RouterModule} from '@angular/router';
import { Perguntas } from '../../data/perguntas.data'
import { CommonModule  } from '@angular/common';
import { TextoPainelComponent } from "../../components/texto-painel/texto-painel.component";
import { BotaoComponent } from "../../components/botao/botao.component";

@Component
({
  selector: 'page-inicio',
  standalone: true,
  imports: [RouterModule, CommonModule, TextoPainelComponent, BotaoComponent],
  templateUrl: './inicio.page.html',
  styleUrl: './inicio.page.css'
})

export class InicioPage
implements OnInit
{
  IndexPerguntaSeleciona: number = 0;
  TextoPainel:string = "";
  RespondendoPerguntas:boolean = true;
  VendoResultado:boolean = false;
  TemTDAH:number = 0;
  NaoTemTDAH:number = 0;
  Resultado:number = 0;
  
  ngOnInit()
  {
    this.ProximaPergunta();
  }

  ProximaPergunta()
  {
    this.IndexPerguntaSeleciona += 1;

    if (Perguntas.length >= this.IndexPerguntaSeleciona)
    {
      this.TextoPainel = Perguntas[this.IndexPerguntaSeleciona - 1].pergunta;
    }
    else
    {
      this.RespondendoPerguntas = false;
      this.VendoResultado = true;
      this.Resultado = this.TemTDAH - this.NaoTemTDAH;


      if (this.Resultado <= -Perguntas.length / 2)
      {
        this.TextoPainel = "É bem improvável que você tenha TDAH";
      }
      else if (this.Resultado >= -Perguntas.length / 2 && this.Resultado < 0)
      {
        this.TextoPainel = "É improvável que você tenha TDAH";
      }
      else if (this.Resultado < Perguntas.length / 2 && this.Resultado >= 0)
      {
        this.TextoPainel = "Existe uma pequena chance de você ter TDAH";
      }
      else if (this.Resultado >= Perguntas.length / 2)
      {
        this.TextoPainel = "Existe uma boa chance de você ter TDAH";
      }
    }
  }

  RespondePergunta(resposta:number)
  {
    if (resposta == 0)
    {
      this.TemTDAH += 1; 
    }
    else if (resposta == 1)
    {
      this.NaoTemTDAH += 1;
    }
    this.ProximaPergunta();
  }

  RefazerTeste()
  {
    this.IndexPerguntaSeleciona = 0;
    this.TemTDAH = 0;
    this.NaoTemTDAH = 0;
    this.RespondendoPerguntas = true;
    this.VendoResultado = false;
    this.ProximaPergunta();
  }
}
