import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-button',
  templateUrl: './game-button.component.html',
  styleUrls: ['./game-button.component.css']
})
export class GameButtonComponent implements OnInit {

  @Input()
  cor!: string;

  @Output()
  itemAdvinhado: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  ativo: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.itemAdvinhado.emit(this.cor);
  }

}
