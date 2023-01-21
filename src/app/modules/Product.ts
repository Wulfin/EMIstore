export class Product{

  id : number;
  title : string;
  description : string;
  price : number;
  discountPercentage : number;
  images: Array<string>
  category: string
  stock: number
  rating: number
  brand: string
  thumbnail: string


  constructor(id: number, title: string, description: string, price: number, discountPercentage: number, images: Array<string>, category: string, stock: number, rating: number, brand: string, thumbnail: string) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.discountPercentage = discountPercentage;
    this.images = images;
    this.category = category;
    this.stock = stock;
    this.rating = rating;
    this.brand = brand;
    this.thumbnail = thumbnail;
  }
}
