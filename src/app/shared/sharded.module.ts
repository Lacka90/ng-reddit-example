import { NgModule } from '@angular/core';
import { OnScrollDirective } from './directives/on-scroll/on-scroll.directive';

@NgModule({
  declarations: [OnScrollDirective],
  exports: [OnScrollDirective],
})
export class SharedModule {}
