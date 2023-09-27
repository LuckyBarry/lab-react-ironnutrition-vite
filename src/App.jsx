import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const deleteOneFood = (foodId) => {
    setFoods(foods.filter((currentFood) => currentFood.id !== foodId));
  }

  const addOneFood = (newFood) => {
    // Add the new food to the foods state
    setFoods([...foods, newFood]);
  }

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <h1>Add Food Entry</h1>
      <AddFoodForm AddOneFood={addOneFood} />
      {foods.map((oneFood) => (
        <FoodBox key={oneFood.id} food={oneFood} deleteFood={deleteOneFood} />
      ))}
    </div>
  );
}

export default App;


// import { useState } from "react";
// import "./App.css";
// import foodsJson from "./foods.json";
// import FoodBox from "./components/FoodBox";
// import AddFoodForm from "./components/AddFoodForm";

// function App() {
//   const [foods, setFoods] = useState(foodsJson);

//   const deleteOneFood = (foodId) => {
//     setFoods(foods.filter((currentFood) => currentFood.id !== foodId));

//   }

//   function AddFood() {

//     const [name, setName] = useState('')
//     const [image, setImage] = useState('')
//     const [calories, setCalories] = useState(0)
//     const [servings, setServings] = useState(0)

//     const handleSubmit = event => {
//       event.preventDefault()
//       console.log({ name })
//       console.log({ image })
//       setTimeout(() => {
//       }, 250)
//     }

//   }

//   return (
//     <div className="App">
//       <h1>LAB | React IronNutrition</h1>
//       <h1>Add Food Entry</h1>
//       <AddFoodForm AddOneFood={AddFood} />
//       {foods.map((oneFood) => (
//         <FoodBox key={oneFood.id} food={oneFood} deleteFood={deleteOneFood} />
//       ))}
//     </div>
//   );
// }

// export default App;


// import { useState } from "react";
// import "./App.css";
// import foodsJson from "./foods.json";
// import FoodBox from "./components/FoodBox";

// function App() {
//   const [foods, setFoods] = useState(foodsJson);

//   const deleteOneFood = (foodsId) => {
//     setFoods(foods.filter(currentFoods => currentFoods.id !== foodsId))
//   }


//   return (
//     <div className="App">
//       <h1>LAB | React IronNutrition</h1>
//       {foodsJson.map((oneFood) => {
//         return <FoodBox key={oneFood.id} foods={oneFood} deleteFood={deleteOneFood} />;
//       })}
//     </div>
//   );
// }

// export default App;

