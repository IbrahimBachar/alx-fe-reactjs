import React from 'react'
import { useParams, Link } from 'react-router-dom'
import recipes from '../data.json'
import { useState, useEffect } from 'react'
    

function RecipeDetail() {

    const { id } = useParams();
    const [recipe, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    // const recipe = recipes.find((recipe) => recipe.id === parseInt(id));

    useEffect(() => {
        const fetchRecipes = () => {
            const recipeFound = recipes.find((recipe) => recipe.id === parseInt(id));
            if(recipeFound) {
                setRecipes(recipeFound);
            }
        setLoading(false);
    };
    fetchRecipes();
}, [id]);


    if(loading) {
        return <div className='text-center text-blue-500 text-xl mt-10'>Loading...</div>;
    }

    if(!recipe) {
        return <div className='text-center text-red-500 text-xl mt-10'>Recipe not found!</div>;
    }

  return (
    <div className='container mx-auto p-6'>
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <img src={recipe.image} alt={recipe.title} className='w-full h-64 object-cover mb-4 rounded-md' />
        <h1 className='text-3xl font-bold mb-4'>{recipe.title}</h1>
        <p className='text-gray-700 mb-4'>{recipe.summary}</p>

        <h2 className='text-2xl font-semibold mt-6 mb-2'>Ingredients</h2>
        <ul className='list-disc ml-5 text-gray-600'>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h2 className='text-2xl font-semibold mt-6 mb-2'>Instructions</h2>
        <ol className='list-decimal ml-5 text-gray-600'>
          {recipe.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
        <Link to='/' className='mt-6 inline-block bg-blue-500 text-white rounded-md px-4 py-2 text-sm font-medium hover:bg-blue-600'>Back to Home</Link>
      </div>
    </div>
  )
}

export default RecipeDetail
