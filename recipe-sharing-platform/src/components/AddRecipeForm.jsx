import { useState } from "react";

const AddRecipeForm = ({ onAddRecipe }) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!title || !ingredients || !steps) {
      setError("All fields are required.");
      return;
    }

    const ingredientsList = ingredients.split("\n").filter(item => item.trim() !== "");
    const stepsList = steps.split("\n").filter(step => step.trim() !== "");

    if (ingredientsList.length < 2) {
      setError("Please enter at least two ingredients.");
      return;
    }

    // Create new recipe object
    const newRecipe = {
      id: Date.now(),
      title,
      summary: steps.substring(0, 50) + "...",
      ingredients: ingredientsList,
      instructions: stepsList,
      image: "https://via.placeholder.com/150"
    };

    onAddRecipe(newRecipe);
    setTitle("");
    setIngredients("");
    setSteps("");
    setError("");
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Recipe</h2>
      
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium">Recipe Title</label>
          <input 
            type="text" 
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            placeholder="Enter recipe title"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Ingredients (one per line)</label>
          <textarea 
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="4"
            value={ingredients} 
            onChange={(e) => setIngredients(e.target.value)} 
            placeholder="Example: \n- 2 eggs\n- 1 cup flour"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Preparation Steps (one per line)</label>
          <textarea 
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="4"
            value={steps} 
            onChange={(e) => setSteps(e.target.value)} 
            placeholder="Example: \n1. Preheat oven to 350°F\n2. Mix all ingredients"
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
