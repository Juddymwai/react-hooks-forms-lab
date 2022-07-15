import React, {useState} from "react";
import { v4 as uuid } from "uuid";


function ItemForm({onItemFormSubmit}) {
  const [name, setName] = useState({
    name:'',
    category:''
  });
  const [category, setCategory] = useState("Produce");

  function NameChange(event) {
    setName(event.target.value);
  }
  function CategoryChange(event) {
    setCategory(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    onItemFormSubmit({
      id: uuid(),
      name,
      category,
    });
  }


  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={NameChange} />
      </label>

      <label>
        Category:
        <select name="category" onChange={CategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
