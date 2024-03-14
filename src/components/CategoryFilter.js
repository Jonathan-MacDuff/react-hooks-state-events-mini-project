import React from "react";

function CategoryFilter({ categories, handleCatClick }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button 
          onClick={handleCatClick} 
          key={category}
          >{category}
          </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
