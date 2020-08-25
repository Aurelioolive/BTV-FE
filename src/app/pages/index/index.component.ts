import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  userUrlImage = 'https://pbs.twimg.com/profile_images/809827588239720448/WRPKhorF_400x400.jpg';
  name = 'Aurélio Oliveira'
  user = '@aurelioolive'
  tweet = '#hashTagExclusivaQueSoEuUso123 testando o limite de tweets suportados aqui pq eu quero saber se dá pra ler um tweet todo. estou escrevendo coisas aleatórias até encher todos os caracteres necessários para que o código me barre de fazer um super tweetão mas já falta pouco pra';

  constructor() { }

  ngOnInit(): void {
  }
}
