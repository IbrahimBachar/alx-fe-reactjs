import {React, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import JsonData from '../data.json'
import AddRecipeForm from './AddRecipeForm';

function HomePage() {
  
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        // fetch(JsonData)
        //   .then((response) => response.json())
        //   .then((data) => setRecipes(data));
        setRecipes(JsonData)
      }, []);


      const addRecipe = (newRecipe) => {
        setRecipes([...recipes, newRecipe]);
      };

  return (
    <>
    <AddRecipeForm onAddRecipe={addRecipe} />
    <div className="container mx-auto p-5">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">Recipe Sharing Platform</h1>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
            <div key={recipe.id} className="bg-white p-4 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
                <img src={recipe.image} alt={recipe.name} className="w-full h-48 object-cover rounded-md" />
                <h2 className="text-xl font-semibold mt-4">{recipe.title}</h2>
                <p className="text-gray-600 mt-2">{recipe.summary}</p>
                <Link to={`/recipe/${recipe.id}`} className="block mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold text-center py-2 rounded-md">View Recipe</Link>
            </div>
        ))}
       </div>
    </div>
    </>
  )
}

export default HomePage
