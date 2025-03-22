import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selectedRecipe = data.find(recipe => recipe.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-3xl mx-auto">
        <div className="border rounded-lg shadow-lg overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-64 object-cover mb-6 shadow-md"
          />
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
            <p className="text-lg mb-4">{recipe.summary}</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">Ingredients</h2>
            <ul className="list-disc pl-6 mb-6">
              {/* Assuming ingredients are available in the recipe data */}
              {recipe.ingredients?.map((ingredient, index) => (
                <li key={index} className="text-lg">{ingredient}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-2">Cooking Instructions</h2>
            <p className="text-lg">{recipe.instructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
