import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import EditRecipeForm from './components/EditRecipeForm'
import SearchBar from './components/SearchBar'


function App() {

  return (
    <div>
      <h1>Recipe App</h1>
      <SearchBar />
      <Routes>
        <Route path="/" element={<> 
          <EditRecipeForm />
          <RecipeList />
        </>} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </div>
  )
}

export default App
