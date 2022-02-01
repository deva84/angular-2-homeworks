import { ChangeDetectionStrategy, Component, Inject, OnInit, Optional } from '@angular/core';
import { Category } from '../../models/products.models';
import { constants, ConstantsService } from '../../../core/services/constants/constants.service';
import { GeneratorFactory } from '../../../core/services/generator/generator.factory';
import {
  generatedString,
  GeneratorService,
} from '../../../core/services/generator/generator.service';
import {
  LocalStorageService,
  localStore,
} from '../../../core/services/local-storage/local-storage.service';

@Component({
  selector: 'app-first',
  template: `
    <div class="product">
      <span class="title">{{ name }}</span>
      <div class="description">{{ description }}</div>
      <span class="price">{{ price | currency: 'USD' }}</span>
      <span *ngIf="isAvailable; else notAvailable" class="availability">Available</span>
      <ng-template #notAvailable>
        <span class="out-of-stock">Out of stock</span>
      </ng-template>
      <div class="category-wrapper">
        <i class="fas fa-tags"></i>
        <span class="category">{{ category | titlecase }}</span>
      </div>
      <div class="hover-layer" appHighlight>
        <button
          (click)="onAddToCart()"
          [disabled]="!isAvailable"
          [class.btn-disabled]="!isAvailable"
          class="add-to-cart"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./first.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ConstantsService, useValue: constants },
    { provide: generatedString, useFactory: GeneratorFactory(), deps: [GeneratorService] },
    { provide: LocalStorageService, useValue: localStore },
  ],
})
export class FirstComponent implements OnInit {
  public name = 'Milk';
  public description = '3% fat';
  public price = 1.2;
  public category = Category.DAIRY;
  public isAvailable = false;

  constructor(
    @Optional() private constantsService: ConstantsService,
    @Optional() private generatorService: GeneratorService,
    @Inject(generatedString) private gs: string,
    @Optional() private ls: LocalStorageService
  ) {}

  ngOnInit() {
    Object.entries(this.constantsService.getAppData()).forEach(([key, value]) =>
      console.log(`${key}: ${value}`)
    );
    console.log(
      `Generator Service generate: ${this.generatorService.generate(20)}\nGenerated string: ${
        this.gs
      }\nGeneratorService new ID: ${this.generatorService.getNewID()}`
    );

    this.ls.setItem('initial-item', { greeting: 'hello world' });
    console.log('Local Storage Service: ', this.ls.getItem('initial-item'));
  }

  onAddToCart(): void {
    console.log(`${this.name} has been added to your cart!`);
  }
}
