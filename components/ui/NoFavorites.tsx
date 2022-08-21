
import { Container, Image, Text } from "@nextui-org/react"

export const NoFavorites = () => {
  return (
    <div>
 <Container css={{
            display:'flex',
            flexDirection:'column',
            height:'calc(100vh-100px)',
            alignItems:'center',
            justifyContent:'center',
            alignSelf:'center'
        }}>
            <Text h1>
                No hay Favoritos
            </Text>
            <Image
            alt="img"
            src='https://static.wikia.nocookie.net/bibliotecapkmn/images/2/2c/Charmander_DW.png/revision/latest?cb=20130201162127&path-prefix=es'
            width={250}
            height={250}
            css={{
                opacity:'0.1'
            }}
            />
        </Container>

    </div>
  )
}
