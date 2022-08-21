import { useState } from 'react';

import { NextPage, GetStaticProps, GetStaticPaths  } from 'next';
import { Grid, Card, Row, Text, Button, Container, Image } from '@nextui-org/react'

import confetti from 'canvas-confetti'

import { pokeApi } from '../../api';
import { Pokemon } from '../../interfaces';
import { Layout } from '../../components/layouts';
import { localFavorites } from '../../utils';
import { getPokemonInfo } from '../../utils';
interface Props{
  pokemon:Pokemon
}
const PokemonPage:NextPage<Props> = ({pokemon}) => {
  const [isInFavorites, setIsInFavorites] = useState( localFavorites.existPokemonInFavorites( pokemon.id ) )


  const onToggleFavorites=() => {
    localFavorites.toggleFavorites(pokemon.id)
    setIsInFavorites(favorites=>!favorites)

    if(  isInFavorites ) return

    confetti({
      zIndex:999,
      particleCount:100,
      spread:160,
      angle:-100,
      origin:{
        x:1,
        y:0
      }
    })
  }
  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{margiTop:'2px'}} gap={ 2 }>
        <Grid xs={12} sm={4}>  
          <Card
          isHoverable
          css={{
            paddig:'30px'
          }}
          >
            <Card.Body>
              <Card.Image
              src={pokemon.sprites.other?.dream_world.front_default || 'no-img.png'}
              alt={pokemon.name}
              width='100%'
              height={200}
              />
              
            </Card.Body>
          </Card>
        </Grid>
          <Grid
          xs={12}
          sm={8}
          >
            <Card>
              <Card.Header
              css={{
                display:'flex',
                justifyContent:'space-between'
              }}
              >
                <Text h1 >
                  {pokemon.name}
                </Text>

                <Button
                  color='gradient'
                  ghost={ !isInFavorites }
                  onPress={onToggleFavorites}
                >
                  {isInFavorites? 'En Favoritos':'Guardar en Favoritos'}
                </Button>
              </Card.Header>
              <Card.Body>
                <Text size={30}>Sprites</Text>
                <Container direction='row' display='flex'>
                    <Image
                    src={ pokemon.sprites.front_default  }
                    alt={ pokemon.name }
                    width={100}
                    height={100}
                    />
                     <Image
                    src={ pokemon.sprites.back_default }
                    alt={ pokemon.name }
                    width={100}
                    height={100}
                    />
                     <Image
                    src={ pokemon.sprites.front_shiny }
                    alt={ pokemon.name }
                    width={100}
                    height={100}
                    />
                     <Image
                    src={ pokemon.sprites.back_shiny }
                    alt={ pokemon.name }
                    width={100}
                    height={100}
                    />
                </Container>
              </Card.Body>
            </Card>

          </Grid>

      </Grid.Container>
    </Layout>
  )
}

//Para generar las paginas eestaticas de mi aplicacion
export const getStaticPaths: GetStaticPaths = async (ctx) => {
   const pokemon151=[...Array(151)].map( ( value, index )=>`${ index + 1 }`)
  return {
    paths: pokemon151.map( id => ({
      params:{ id }
    })),
    fallback: false
  }
}

//Para generar la data por pagina de ims paths
export const getStaticProps: GetStaticProps = async ({params}) => {

  const { id } = params as { id: string }

  
   return {
     props: {
       pokemon: await getPokemonInfo(id)
     }
   }
}

export default PokemonPage