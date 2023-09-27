import React, { useState } from "react";

function AddFoodForm(props) {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();

        const newFood = {
            id: foods.length + 1, // You should generate a unique ID here
            name,
            image,
            calories,
            servings,
        };

        // Call the function from props to add the new food
        props.AddOneFood(newFood);

        // Reset the form fields
        setName('');
        setImage('');
        setCalories(0);
        setServings(0);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name
                <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </label>
            <br />
            <label>
                Image
                <input
                    type="text"
                    value={image}
                    onChange={(event) => setImage(event.target.value)}
                />
            </label>
            <br />
            <label>
                Calories
                <input
                    type="number"
                    value={calories}
                    onChange={(event) => setCalories(event.target.value)}
                />
            </label>
            <br />
            <label>
                Servings
                <input
                    type="number"
                    value={servings}
                    onChange={(event) => setServings(event.target.value)}
                />
            </label>
            <br />
            <button type='submit'>Create</button>
        </form>
    );
}

export default AddFoodForm;


// import { useState } from "react";
// import "./App.css";
// import foodsJson from "./foods.json";
// import FoodBox from "./components/FoodBox";
// import AddFoodForm from "./components/AddFoodForm";

// function App() {
//     const [foods, setFoods] = useState(foodsJson);

//     const deleteOneFood = (foodId) => {
//         setFoods(foods.filter((currentFood) => currentFood.id !== foodId));
//     }

//     const addOneFood = (newFood) => {
//         // Add the new food to the foods state
//         setFoods([...foods, newFood]);
//     }

//     return (
//         <div className="App">
//             <h1>LAB | React IronNutrition</h1>
//             <h1>Add Food Entry</h1>
//             <AddFoodForm AddOneFood={addOneFood} />
//             {foods.map((oneFood) => (
//                 <FoodBox key={oneFood.id} food={oneFood} deleteFood={deleteOneFood} />
//             ))}
//         </div>
//     );
// }

// export default App;



// // function AddFoodForm(props) {

// //     return (


// //         <form onSubmit={props.handleSubmit}>
// //             <label>
// //                 Name
// //                 <input
// //                     type="text"
// //                     value={props.name}
// //                     onChange={event => {
// //                         console.log(event)
// //                         props.setName(event.target.value)
// //                     }}
// //                 />
// //             </label>
// //             <br />
// //             <label>
// //                 Image
// //                 <input
// //                     type="text"
// //                     value={props.image}
// //                     onChange={event => {
// //                         console.log(event)
// //                         props.setImage(event.target.value)
// //                     }}
// //                 />
// //             </label>
// //             <br />
// //             <label>
// //                 Calories
// //                 <input
// //                     type="number"
// //                     value={props.calories}
// //                     onChange={event => {
// //                         console.log(event)
// //                         props.setCalories(event.target.value)
// //                     }}
// //                 />
// //             </label>
// //             <br />
// //             <label>
// //                 Servings
// //                 <input
// //                     type="number"
// //                     value={props.servings} onChange={event => props.setServings(event.target.value)} />
// //             </label>
// //             <br />
// //             <button type='submit'>Create</button>
// //         </form>
// //     )
// // }

// // export default AddFoodForm
