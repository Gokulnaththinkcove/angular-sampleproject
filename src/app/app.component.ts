import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
     <div class="container-fluid example-wrapper">
    <div class="row">
        <div class="col-xs-12 col-sm-4 example-col">
            <p>Country:</p>
            <kendo-dropdownlist [data]="dataCategory" [value]="selectedCategory" [defaultItem]="defaultItemCategories"
                textField="categoryName" valueField="categoryId" (valueChange)="handleCategoryChange($event)">
            </kendo-dropdownlist>
        </div>
        <div class="col-xs-12 col-sm-4 example-col">
            <p>State:</p>
            <kendo-dropdownlist [disabled]="isDisabledProducts" [defaultItem]="defaultItemProducts"
                [data]="dataResultProducts" [value]="selectedProduct" textField="productName" valueField="productId"
                (valueChange)="handleProductChange($event)">
            </kendo-dropdownlist>
        </div>
        <div class="col-xs-12 col-sm-4 example-col">
            <p>City:</p>
            <kendo-dropdownlist [disabled]="isDisabledOrders" [defaultItem]="defaultItemOrders"
                [data]="dataResultOrders" [value]="selectedOrder" textField="orderName" valueField="orderId"
                (valueChange)="handleOrderChange($event)">
            </kendo-dropdownlist>
        </div>
    </div>
</div>
    `,
  styles: [
    `
        kendo-dropdownlist {
            width: 170px;
        }
    `,
  ],
})
export class AppComponent {
  public isDisabledProducts = true;
  public isDisabledOrders = true;

  public defaultItemCategories: { categoryName: string; categoryId: number } = {
    categoryName: 'Select category',
    categoryId: null,
  };

  public defaultItemProducts: { productName: string; productId: number } = {
    productName: 'Select product',
    productId: null,
  };

  public defaultItemOrders: { orderName: string; orderId: number } = {
    orderName: 'Select order',
    orderId: null,
  };

  public dataCategory: Array<{ categoryName: string; categoryId: number }> = [
    { categoryName: 'Austalia', categoryId: 1 },
    { categoryName: 'India', categoryId: 2 },
    { categoryName: 'Pakisthan', categoryId: 3 },
  ];

  public dataProducts: Array<{
    productName: string;
    productId: number;
    categoryId: number;
  }> = [
    { productName: 'New South Wales', productId: 1, categoryId: 1 },
    { productName: 'Victoria', productId: 2, categoryId: 1 },
    { productName: 'Queensland', productId: 3, categoryId: 1 },
    { productName: 'Andhra Pradesh', productId: 4, categoryId: 2 },
    { productName: 'Karnataka', productId: 5, categoryId: 2 },
    { productName: 'Kerala', productId: 6, categoryId: 2 },
    { productName: 'TamilNadu', productId: 7, categoryId: 2 },
    { productName: 'Azad Jammu &Kashmir', productId: 8, categoryId: 3 },
    { productName: 'Balochistan', productId: 9, categoryId: 3 },
    { productName: 'Islamabad Capital Territory', productId: 10, categoryId: 3}
  ];

  public dataOrders: Array<{
    orderName: string;
    orderId: number;
    productId: number;
  }> = [
    { orderName: 'Cardiff', orderId: 1, productId: 1 },
    { orderName: 'NewPort', orderId: 2, productId: 1 },
    { orderName: 'Swansea', orderId: 3, productId: 1 },
    { orderName: 'Melbourne', orderId: 4, productId: 2 },
    { orderName: 'Portland', orderId: 5, productId: 2 },
    { orderName: 'Central Queensland', orderId: 6, productId: 3 },
    { orderName: 'Central West Queensland', orderId: 7, productId: 3 },
    { orderName: 'South West Queensland', orderId: 8, productId: 3 },
    { orderName: 'Visakhapatnam', orderId: 7, productId: 4 },
    { orderName: 'Tirupati', orderId: 8, productId: 4 },
    { orderName: 'Bagalkot', orderId: 9, productId: 5 },
    { orderName: 'Bengaluru Urban', orderId: 10, productId: 5 },
    { orderName: 'Bengaluru Rural', orderId: 11, productId: 5 },
    { orderName: 'Udupi', orderId: 12, productId: 5 },
    { orderName: 'Alappuzha', orderId: 13, productId: 6 },
    { orderName: 'Ernakulam', orderId: 14, productId: 6 },
    { orderName: 'Kozhikode', orderId: 15, productId: 6 },
    { orderName: 'Chennai', orderId: 16, productId: 7 },
    { orderName: 'Coimbatore', orderId: 17, productId: 7 },
    { orderName: 'Tirunelveli', orderId: 18, productId: 7 },
    { orderName: 'New Mirpur City', orderId: 19, productId: 8 },
    { orderName: 'Muzaffarabad', orderId: 20, productId: 8 },
    { orderName: 'Chaman', orderId: 21, productId: 9 },
    { orderName: 'Hub', orderId: 22, productId: 9 },
    { orderName: 'Islamabad Rural', orderId: 23, productId: 10 },
    { orderName: 'Rawalpindi', orderId: 24, productId: 10 },
  ];

  public dataResultProducts: Array<{
    productName: string;
    productId: number;
    categoryId: number;
  }>;

  public dataResultOrders: Array<{
    orderName: string;
    orderId: number;
    productId: number;
  }>;

  public selectedCategory: { categoryName: string; categoryId: number };
  public selectedProduct: { productName: string; productId: number };
  public selectedOrder: { orderName: string; orderId: number };

  handleCategoryChange(value) {
    this.selectedCategory = value;
    this.selectedProduct = undefined;
    this.selectedOrder = undefined;

    if (value.categoryId === this.defaultItemCategories.categoryId) {
      this.isDisabledProducts = true;
      this.dataResultProducts = [];
    } else {
      this.isDisabledProducts = false;
      this.dataResultProducts = this.dataProducts.filter(
        (s) => s.categoryId === value.categoryId
      );
    }

    this.isDisabledOrders = true;
    this.dataResultOrders = [];
  }

  handleProductChange(value) {
    this.selectedProduct = value;
    this.selectedOrder = undefined;

    if (value.productId === this.defaultItemProducts.productId) {
      this.isDisabledOrders = true;
      this.dataResultOrders = [];
    } else {
      this.isDisabledOrders = false;
      this.dataResultOrders = this.dataOrders.filter(
        (s) => s.productId === value.productId
      );
    }
  }

  handleOrderChange(value) {
    this.selectedOrder = value;
  }
}
