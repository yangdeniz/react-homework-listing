import React from 'react';
import PropTypes from 'prop-types';
import ListingItemModel from './listing-item-model';

function ListingItem({ item }) {
  const formatPrice = (price, currency) => {
    switch (currency) {
      case 'USD': return `$${price}`;
      case 'EUR': return `€${price}`;
      default: return `${price} ${currency}`;
    }
  };

  if (!item || !item.isDefined()) {
    return null;
  }

  return (
    <div className='item'>
      <div className='item-image'>
        <a href={item.url}>
          <img src={item.image} alt='' />
        </a>
      </div>
      <div className='item-details'>
        <p className='item-title'>{item.title.length > 50 ? `${item.title.substring(0, 50)}...` : item.title}</p>
        <p className='item-price'>{formatPrice(item.price, item.currency)}</p>
        <p className={`item-quantity level-${item.quantity <= 10 ? 'low' : item.quantity <= 20 ? 'medium' : 'high'}`}>{item.quantity} left</p>
      </div>
    </div>
  );
}

ListingItem.propTypes = {
  item: PropTypes.instanceOf(ListingItemModel).isRequired
};

export default ListingItem;