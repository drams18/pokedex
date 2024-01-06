import { Component } from '@angular/core';
import { LISTPOKEMONS } from '../db/list';
import { Pokemon } from '../model/pokemon';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  newPokemon:Pokemon = new Pokemon();


  addPokemon(){
    LISTPOKEMONS.push(this.newPokemon);
    this.newPokemon = new Pokemon();
  }
}

