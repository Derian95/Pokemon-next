import { useEffect, useState } from 'react';
import { Grid, Card } from '@nextui-org/react';

import { Layout } from "../../components/layouts"
import { FavoritePokemons, NoFavorites } from '../../components/ui';
import { localFavorites } from "../../utils";
const FavoritesPage = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])

  useEffect(() => {
    
    setFavoritePokemons(localFavorites.pokemons())

  }, [])
  
  return (
    <Layout title='Pokemons- Favorites'>

      {
        favoritePokemons.length===0
        ? <NoFavorites/>
        :(
          <FavoritePokemons pokemon={favoritePokemons}/>
        )
      }
    </Layout>
  )
}

export default FavoritesPage