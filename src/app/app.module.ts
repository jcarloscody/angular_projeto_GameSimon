import { GameStateService } from 'src/app/servico/game-state.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GameComponent } from './components/game/game.component';
import { GameButtonComponent } from './components/game/game-button/game-button.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    GameButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [GameStateService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
