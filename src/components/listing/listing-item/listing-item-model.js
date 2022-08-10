class ListingItemModel {
  constructor(id, url, image, title, currency, price, quantity) {
    this.id = id;
    this.url = url;
    this.image = image;
    this.title = title;
    this.currency = currency;
    this.price = price;
    this.quantity = quantity;
  }

  isDefined() {
    return this.id 
      && this.url 
      && this.image 
      && this.title 
      && this.currency 
      && this.price 
      && this.quantity;
  }
}

export default ListingItemModel;