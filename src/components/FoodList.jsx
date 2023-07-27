import { useState } from "react";
import FoodBox from "./FoodBox";
import foodsJson from "../foods.json";
import AddFoodForm from "./AddFoodForm";
import Search from "./Search";

function FoodList() {
    const [allFoods ,setFoodsList] =useState(foodsJson)

    const [ searchInput, setSearchInput ] = useState('')

    const deleteFunction = (id)=>{
        const updatedFood = allFoods.filter((f)=>f.id!=id)
        setFoodsList(updatedFood)
    }

    const addFood=(values)=>{
      console.log(values)
      setFoodsList([...allFoods,values])
    }
    
    let filtered = searchInput ? [...allFoods].filter(food => food.name.toLowerCase().includes(searchInput.toLowerCase())) : allFoods


    return (
      <div>
        <AddFoodForm addFood={addFood}/>
        <br/>
        <Search setSearchInput={setSearchInput} />
        { filtered.map((f) => (
              <FoodBox
                key={f.id}
                food={f}
                deleteFunction={deleteFunction}
              />
            ))}
          {!filtered.length && <h2>There is no more food to show</h2>}  
          </div>
    );
  }
  
export default FoodList;