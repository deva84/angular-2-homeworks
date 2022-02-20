import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Inject,
  OnInit,
  Optional,
  Output,
} from '@angular/core';
import { Category, IProductModel } from '../../models/products.models';
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

export const firstComponentItem: IProductModel = {
  id: 0,
  name: 'Whole Milk',
  description: 'Great Value Whole Vitamin D Milk, 1L, 3% fat',
  price: 1.2,
  category: Category.DAIRY,
  isAvailable: false,
  img_large: 'assets/images/products/large/milk.jpg',
  img_medium: 'assets/images/products/medium/milk.jpg',
  img_small: 'assets/images/products/small/milk.jpg',
  img_xsmall: 'assets/images/products/x_small/milk.jpg',
};

@Component({
  selector: 'app-first',
  template: `
    <div class="product">
      <img [src]="firstItem.img_small" />
      <div class="product-info">
        <span class="title">{{ firstItem.name }}</span>
        <span class="price">{{ firstItem.price | currency: 'USD' }}</span>
      </div>
      <span *ngIf="firstItem.isAvailable; else notAvailable" class="availability">Available</span>
      <ng-template #notAvailable>
        <span class="out-of-stock">Out of stock</span>
      </ng-template>
      <div class="hover-layer" appHighlight (click)="onOpenProductPage()"> </div>
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
  @Output() firstItemPageOpened = new EventEmitter<IProductModel>();

  public firstItem = firstComponentItem;

  constructor(
    @Optional() private constantsService: ConstantsService,
    @Optional() private generatorService: GeneratorService,
    @Inject(generatedString) private gs: string,
    @Optional() private ls: LocalStorageService
  ) {}

  ngOnInit(): void {
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

  onOpenProductPage(): void {
    this.firstItemPageOpened.emit(this.firstItem);
  }
}
