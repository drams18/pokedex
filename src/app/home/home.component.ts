import { Component } from '@angular/core';
import { LISTPOKEMONS } from '../db/list';
import { Pokemon } from '../model/pokemon';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  allpokemons = LISTPOKEMONS;
  singlePokemon : Pokemon = new Pokemon();




  filterPokemons(value:string){
    this.allpokemons = LISTPOKEMONS;
    this.allpokemons = this.allpokemons.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(value.toLowerCase());
    })
  
  }

  getSinglePokemon(pokemon:any){
    this.singlePokemon = pokemon;
  }
  

}

