import { Routes, Route, BrowserRouter } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div style={{ maxWidth: '600px', margin: '20px auto', textAlign: 'center' }}>
      <h1>Recipe Sharing App</h1>
      <SearchBar />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<>
          <AddRecipeForm />
          <RecipeList />
        </>} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
