import useRecipeStore from '../recipeStore';

const FavoriteButton = ({ recipeId }) => {
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  const favorites = useRecipeStore((state) => state.favorites);
  
  const isFavorite = favorites.includes(recipeId);

  return (
    <button 
      onClick={() => isFavorite ? removeFavorite(recipeId) : addFavorite(recipeId)}
      style={{ background: isFavorite ? 'red' : 'gray', color: 'white', padding: '5px' }}
    >
      {isFavorite ? 'Unfavorite' : 'Favorite'}
    </button>
  );
};

export default FavoriteButton;
