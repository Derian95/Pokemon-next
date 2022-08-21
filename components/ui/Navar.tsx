import {useTheme, Text,Spacer} from '@nextui-org/react'
import Image from 'next/image';
import Link from 'next/link'
export const Navar = () => {

    const{theme } = useTheme()

  return (
    <div style={{
        display:'flex',
        width:'100%',
        flexDirection:'row',
        alignContent:'center',
        alignItems:'center',
        padding:'0px 20px',
        backgroundColor:theme?.colors.gray100.value
    }}
    
    >
        <Image
            src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png'
            alt='photo'
            width={70}
            height={70}
        />
        <Link href={'/'}>
          <a style={{display:'flex' }}>
          <Text color='white' h2> P</Text>
          <Text color='white' h3>okemon</Text>
          </a>
        
        </Link>
       
        <Spacer css={{flex:1}}/>

        <Link href={'/favorites'}>
          <a>
          <Text color='white' h3>Favoritos</Text>
          </a>
        </Link>
    </div>
  )
}
