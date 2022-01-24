import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisableDirective } from './directives/disable/disable.directive';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { TransformDirective } from './directives/transform/transform.directive';

@NgModule({
  declarations: [DisableDirective, HighlightDirective, TransformDirective],
  imports: [CommonModule],
  exports: [DisableDirective, HighlightDirective, TransformDirective],
})
export class SharedModule {}
