import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IProductModel } from '../../../products/models/products.models';
import { ProductService } from '../../../products/services/product.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'main-page.component.html',
  styleUrls: ['main-page.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent implements OnInit {
  promoTextLeft = 'Live tasty';
  promoTextRight = 'Eat fresh';
  specialOffersQuantity = 3;
  specialOfferItems: IProductModel[] = [];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      const ids = this.getRandomProductIds(products.length);
      ids.forEach((id) => this.specialOfferItems.push(products.find((prod) => prod.id === id)!));
    });
  }

  ngAfterViewInit(): void {}

  private getRandomProductIds(productsQuantity: number) {
    const imageIdsSet = new Set();
    while (imageIdsSet.size < this.specialOffersQuantity) {
      let productId = Math.floor(Math.random() * productsQuantity + 1);
      imageIdsSet.add(productId);
    }
    return [...imageIdsSet];
  }

  onOpenProductPage(event: MouseEvent): void {
    const imageId: number = Number((event.target as Element).id);
    const productId = this.specialOfferItems[imageId].id;
    const link = ['/product', productId];
    this.router.navigate(link);
  }
}
