import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PokemonDetailService } from './pokemon-detail.service';

import { card } from './card'


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public detailsPokemon: Object;

  constructor(
    private service: PokemonDetailService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.service.getSpecific(this.route.snapshot.params.id).subscribe((data: card) => {
      this.detailsPokemon = data.card;
      console.log('retorno api de details ', this.detailsPokemon)
    })
  }

}
