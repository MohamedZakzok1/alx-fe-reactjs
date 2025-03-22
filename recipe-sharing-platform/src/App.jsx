import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  return (
    <Router>
      <div>
        <header className="bg-blue-500 text-white p-4">
          <h1 className="text-3xl font-bold">Recipe Sharing Platform</h1>
        </header>
        <main className="p-4">
          <Routes>
            {/* Home Page route */}
            <Route path="/" element={<HomePage />} />
            {/* Recipe Detail page route */}
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            {/* Add Recipe Form route */}
            <Route path="/add-recipe" element={<AddRecipeForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
