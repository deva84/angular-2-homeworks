import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisableDirective } from './directives/disable.directive';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [DisableDirective, HighlightDirective],
  imports: [CommonModule],
  exports: [DisableDirective, HighlightDirective],
})
export class SharedModule {}
