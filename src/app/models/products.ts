export interface ProductsResponse {
    products: ProductModel[];
}

export interface ProductModel {
    id: number;
    title: string;
    price: number;
    stock: number;
    category: string;
    image: string;
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