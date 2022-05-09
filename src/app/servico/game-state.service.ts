import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CORES, INICIO_CONTAGEM } from '../models/constants';

@Injectable({
  providedIn: 'root'
})
export class GameStateService {

  simon: string[] = [];
  jogadorAdvinhou: string[] = [];
  contagem!: number;
  state = new Subject<any>();

  constructor() {
    this.contagem = INICIO_CONTAGEM;
  }

  private get coresAleatorias(): string {
    return CORES[Math.floor(Math.random() * 4)];
  }

  adicionaSimon(increment: boolean = false): void {
    if (increment) {
      this.contagem++;
    }
    this.simon.push(this.coresAleatorias);
  }

  gerarSimon(): string[]{
    for (let i = 0; i < this.contagem; i++) {
      this.adicionaSimon();
    }
    this.setState()
    return this.simon;
  }

  reiniciarSimon(): string[] {
    this.contagem = INICIO_CONTAGEM;
    return this.gerarSimon();
  }


  jogadorAdivinha(value: string) {
    this.jogadorAdvinhou.push(value);
    if (!this.compararSimon()) {
      this.jogadorAdvinhou = [];
      this.simon = [];
      this.reiniciarSimon();
    }
    this.setState()
  }

  compararSimon(): boolean {
    for (let i = 0; i < this.jogadorAdvinhou.length; i++){
      if (this.simon[i] !== this.jogadorAdvinhou[i]) {
        return false;
      }
    }
    if (this.jogadorAdvinhou.length == this.simon.length) {
      this.updateGame();
    }
    return true;
  }

  updateGame(): void {
    this.adicionaSimon(true);
    this.jogadorAdvinhou = [];
  }

  setState(){
    this.state.next({
      jogador: this.jogadorAdvinhou,
      simon: this.simon,
      contagem: this.contagem
    })
  }

}