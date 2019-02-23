import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatListModule,
  MatProgressBarModule,
  MatIconModule,
} from '@angular/material';

@NgModule({
  imports: [MatButtonToggleModule, MatButtonModule, MatListModule, MatProgressBarModule, MatIconModule],
  exports: [MatButtonToggleModule, MatButtonModule, MatListModule, MatProgressBarModule, MatIconModule],
})
export class UIModule {}
