import React from 'react';
import './Recipe.css';

function Recipe({title, img, calories, ingredients, url, source}) {
const cal = parseFloat(calories).toFixed(2);
return (
<div className="Recipe my-3">
    <div className="card c1">
        <img className="card-img-top" src={img} alt="food picture" />
        <div className="card-body">
            <div className="card-title">
                <h3 className="d-flex justify-content-between">{title} </h3>
            </div>
        </div>
    </div>
    <div className="card c2">
        <div className="card-text">
            <h4 className="text-center">&lt; Calories: {cal}cal &gt;</h4>
            <h4>{ingredients.length} Ingredients</h4>
            <ul>
                {ingredients.map(item => (
                    <li>{item.text}</li>
                ))}
            </ul>
            <h4>Instructions-On: <a href={url} target="_blank">{source}</a></h4>
        </div>
    </div>
</div>
);
}

export default Recipe;