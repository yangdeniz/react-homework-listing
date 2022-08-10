import './App.css';
import data from './data/data.json';
import Listing from './components/listing/listing';
import ListingItemModel from './components/listing/listing-item/listing-item-model';

function App() {
  const items = data.map(x => new ListingItemModel(
    x.listing_id, 
    x.url, 
    x.MainImage?.url_570xN, 
    x.title, 
    x.currency_code, 
    x.price, 
    x.quantity
  ));

  return <Listing items={items} />;
}

export default App;