import {Component, OnInit} from '@angular/core';
import {Product} from '../model/product';
import {Subscription} from 'rxjs';
import {ProductService} from '../service/product.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  product: Product = {
    id: 0,
    name: '',
    price: 0,
    description: '',
  };
  sub: Subscription;
  id = 0;

  constructor(
    private productService: ProductService,
    private activeRouter: ActivatedRoute,
  ) {
    this.sub = this.activeRouter.paramMap.subscribe(
      (paramMap: ParamMap) => {
        this.id = Number(paramMap.get('id'));
        this.product = this.findById(this.id);
      }
    );

  }

  ngOnInit() {
  }

  findById(id: number) {
    return this.productService.findProductById(id);
  }

  deleteProduct() {
    this.productService.deleteProduct(this.product.id);
  }

}
