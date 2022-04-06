import React, { useState } from "react";

function CategoryFilter({categories, setCategory}) {
  const [selected, setSelected] = useState("")
  const handleClick = (e, category) => {
    setSelected(e.target.textContent)
    setCategory(category)
  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {
        categories.map((category, i) => {
          return (
            <button
              key={i}
              onClick={(e) => handleClick(e, category)}
              className={selected === category ? 'selected' : null}
            >
              {category}
            </button>
          )
        })
      }
      
    </div>
  );
}

export default CategoryFilter;
