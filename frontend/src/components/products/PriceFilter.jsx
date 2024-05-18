import styles from './PriceFilter.module.css'
import React, { useState } from 'react';
import Button from '../home/button/Button';

const PriceFilter = ({ items, onFilterChange }) => {
  const initialPriceRange = [0, 55]; // Set your initial price range here
  const [priceRange, setPriceRange] = useState(initialPriceRange);


  const handleSliderChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setPriceRange([0, value]);
  };

  const handleFilterChange = () => {
    onFilterChange(priceRange);
  };

  const handleClearFilter = () => {
    setPriceRange(initialPriceRange);
    onFilterChange(initialPriceRange); // Optionally, you can trigger onFilterChange with the initial values
  };

  // Find the minimum and maximum product prices
  const minProductPrice = Math.min(...items.map((product) => product.price));
  const maxProductPrice = Math.max(...items.map((product) => product.price));

  return (
    <>
    <div className={styles.filter}>
      <h2>Filter by price</h2>
      <input
        type="range"
        min={minProductPrice}
        max={maxProductPrice}
        value={priceRange[1]}
        onChange={handleSliderChange}
        className={styles.slider}
      />
      <div className={styles.inputs}>
        <input type='text' value={`$${minProductPrice}`}  disabled/>
        <input type='text' value={`$${priceRange[1]}`}  disabled/>
      </div>
      
      <div className={styles.button}>
        <Button onClick={handleClearFilter} text='Clear Filter'/>
        <Button onClick={handleFilterChange} text='Apply Filter'/>
      </div>
    </div>
    
    </>
  );
};

export default PriceFilter;
