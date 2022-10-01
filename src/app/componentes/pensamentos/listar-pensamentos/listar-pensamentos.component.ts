import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: "Passo informação para o componente filho",
      autoria: "componente pai",
      modelo: "modelo1"
    },
    {
      conteudo: "Minha propriedade é decorada com @Input()",
      autoria: "componente filho",
      modelo: "modelo2"
    },
    {
      conteudo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      autoria: "componente filho",
      modelo: "modelo3"
    }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
