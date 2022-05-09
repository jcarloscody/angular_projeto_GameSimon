import { Component, OnInit } from '@angular/core';
import { dormir } from 'src/app/models/constants';
import { GameStateService } from 'src/app/servico/game-state.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  contagem!: number;
  cores: any = {
    red: false,
    blue: false,
    yellow: false,
    green: false
  };

  constructor(private game: GameStateService) { }

  ngOnInit(): void {
    this.game.state.subscribe(
      async (state)=>{
        if (state.contagem != this.contagem) {
          await dormir(1000);
          this.contagem = state.contagem;
          this.teasePlayer(state.simon);
        }
      }
    );

    this.game.gerarSimon();

  }

  itemAdvinhado(event: string) : void {
    this.game.jogadorAdivinha(event);
  }

  async teasePlayer(simon: string[]){
    for (let i = 0; i<simon.length; i++){
      this.cores[simon[i]] = true;
      await dormir(500);
      this.cores[simon[i]] = false;
      await dormir(500);
    }

  }
}
