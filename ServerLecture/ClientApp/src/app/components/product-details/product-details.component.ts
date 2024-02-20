import { CurrencyPipe, NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [NgIf, CurrencyPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  
  private _productService = inject(ProductService);
  private _route = inject(ActivatedRoute);
  public product: Product | null = null;

  ngOnInit(): void {

    this._route.paramMap.pipe(
      switchMap(params => {
        let strProductId: string | null = params.get('id');
        strProductId = (strProductId ? strProductId : '-1');

        let productId = parseInt(strProductId);

        return this._productService.getProduct(productId);
      })
    ).subscribe(product => {
      this.product = product;
    });

    
  }
}
