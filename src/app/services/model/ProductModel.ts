export interface ProductModel{
  "id": number,
  "title": string,
  "description": string,
  "price": number,
  "discountPercentage": number,
  "rating": number,
  "stock": number,
  "brand": string,
  "category": string,
  "thumbnail": string,
  "images": string[]
}

export interface ProductResponse{
  products:ProductModel[],
  "total": 100,
  "skip": 0,
  "limit": 10
}
