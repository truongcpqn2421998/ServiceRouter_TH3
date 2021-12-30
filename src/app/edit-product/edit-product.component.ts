import {Component, OnInit} from '@angular/core';
import {ProductService} from '../service/product.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Subscription} from 'rxjs';
import {Product} from '../model/product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

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

  editProduct() {
    this.productService.updateById(this.product, this.product.id);
  }

}
