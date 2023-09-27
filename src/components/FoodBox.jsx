
function FoodBox(props) {
    return (
        <div>
            <p>{props.food.name}</p>
            <img src={props.food.image} style={{ height: "100px" }} />
            <p>Calories: {props.food.calories}</p>
            <p>Servings: {props.food.servings}</p>
            <p>
                <b>Total Calories: {props.food.servings * props.food.calories}</b> kcal
            </p>
            <button type="button" onClick={() => props.deleteFood(props.food.id)}>🗑️</button>
        </div>
    );
}

export default FoodBox;



// function FoodBox(props) {
//     return (


//         <div key={props.foods.id}>
//             <p>{props.foods.name}</p>

//             <img src={props.foods.image} style={{ height: "100px" }} />

//             <p> Calories: {props.foods.calories}</p>
//             <p> Servings: {props.foods.servings}</p>

//             <p>
//                 <b>Total Calories: {props.foods.servings * props.foods.calories}</b> kcal
//             </p>

//             <button type='button' onClick={() => deleteFood(props.foods.id)}>🗑️</button>

//         </div>
//     );
// }

// export default FoodBox