import React from 'react';
import PropTypes from 'prop-types';
import ListingItem from './listing-item/listing-item';
import ListingItemModel from './listing-item/listing-item-model';

function Listing({ items }) {
  return (
    <div className='item-list'>
      {items.map(item => <ListingItem key={item.id} item={item} />)}
    </div>
  );
}

Listing.defaultProps = {
  items: []
};

Listing.propTypes = {
  items: PropTypes.arrayOf(PropTypes.instanceOf(ListingItemModel))
};

export default Listing;