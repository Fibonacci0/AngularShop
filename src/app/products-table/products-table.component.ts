import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild } from '@angular/core';

import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ProductsService } from '../services/products.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-products-table',
  standalone: true,
  imports: [MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule],
  templateUrl: './products-table.component.html',
  styleUrl: './products-table.component.css'
})
export class ProductsTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'title', 'category', 'price', 'actions'];
  dataSource = new MatTableDataSource<ProductModel>();

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  constructor(
    private productsService: ProductsService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    productsService.getAll().subscribe(data =>
      this.dataSource.data = data.products
    );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openDialog(productName: string, productId: number): void {
    const ref = this.dialog.open(ConfirmDialogComponent, {
        width: '250px',
        enterAnimationDuration: '50ms',
        exitAnimationDuration: '50ms',
        data: {
            productName: productName,
            productId: productId
        }
    });

    ref.afterClosed().subscribe(idToDelete => {
        // Check if the dialog result is true (confirmation)
        if (idToDelete) {
            // Call the delete method with the product ID
            this.productsService.delete(idToDelete).subscribe(res => {
                    // Remove the product from the local array
                    this.dataSource.data = this.dataSource.data.filter(x => x.id !== idToDelete);
                    
                    // Show a success message after deletion
                    this.snackBar.open('Deleted successfully', 'Dismiss', {
                        horizontalPosition: "center",
                        verticalPosition: "top",
                    });
                },
                error => {
                    // Handle error case
                    this.snackBar.open('Failed to delete product', 'Dismiss', {
                        horizontalPosition: "center",
                        verticalPosition: "top",
                    });
                }
            );
        }
    });
}
}


export interface ProductModel {
  id: number;
  title: string;
  price: number;
  stock: number;
  category: string;
  image: string;
}

export interface ProductsResponse {
  products: ProductModel[];
}

const ELEMENT_DATA: ProductModel[] = [
  {
    id: 100, title: "iPhone X", category: "Electronics", price: 3400, stock: 10, image: "https://applehome.te.ua/wp-content/uploads/2021/04/apple-iphone-x-64gb-used-silver-2.1000x.jpg"
  },
  {
    id: 103, title: "Xiaomi GT56", category: "Electronics", price: 445, stock: 10, image: "https://applehome.te.ua/wp-content/uploads/2021/04/apple-iphone-x-64gb-used-silver-2.1000x.jpg"
  },
  {
    id: 105, title: "iPhone XS", category: "Electronics", price: 234, stock: 1, image: "https://applehome.te.ua/wp-content/uploads/2021/04/apple-iphone-x-64gb-used-silver-2.1000x.jpg"
  }
];