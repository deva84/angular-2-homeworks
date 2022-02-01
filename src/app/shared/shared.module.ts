import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisableDirective } from './directives/disable/disable.directive';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { TransformDirective } from './directives/transform/transform.directive';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DisableDirective, HighlightDirective, TransformDirective, OrderByPipe],
  imports: [CommonModule, FormsModule],
  exports: [
    CommonModule,
    FormsModule,
    DisableDirective,
    HighlightDirective,
    TransformDirective,
    OrderByPipe,
  ],
})
export class SharedModule {}
