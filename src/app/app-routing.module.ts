import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductListComponent} from './product/product-list/product-list.component';
import {ProductCreateComponent} from './product/product-create/product-create.component';
import {EditProductComponent} from './edit-product/edit-product.component';
import {DeleteProductComponent} from './delete-product/delete-product.component';


const routes: Routes = [
  {
    path: 'product/list',
    component: ProductListComponent
  }, {
    path: 'product/create',
    component: ProductCreateComponent
  }, {
    path: 'product/list/product/:id',
    component: EditProductComponent
  }
  , {
    path: 'product/list/delete/:id',
    component: DeleteProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
