import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit}) {
  const [search, setSearch] = useState("");
  const [chooseCategory, setChooseCategory] = useState("All");
  

  function handleCategoryChange(event) {
    setChooseCategory(event.target.value);
  }

  const itemsToDisplay = items
    // category
    .filter(
      (item) => chooseCategory === "All" || item.category === chooseCategory
    )
    // search term
    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={setSearch} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
