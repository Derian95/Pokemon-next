import Head from 'next/head'
import { Navar } from '../ui'
interface Props {
    children: React.ReactNode
    title?: string
}

const origin =(typeof window ==='undefined')? '': window.location.origin

export const Layout = ({ children, title }: Props) => {


    return (
        <>
            <Head>
                <title>{title || 'Pokemon App'}</title>
                <meta name='author' content='Derian Herrera' />
                <meta
                    name='description'
                    content={`Information about pokemon ${title}`}
                />
                <meta
                    name='keywords'
                    content={`xxx ,pomeon, pokedex ${title}`}
                />
                <meta
                    property='og:title'
                    content={`Informacion sobre ${title}`}
                />
                <meta
                    property='og:description'
                    content='Esta es la pagina de descripcion'
                />
                <meta
                    property='og:image'
                    content={`${origin}/img/banner.png`}
                />
            </Head>
            <Navar />
            <main
                style={{
                    padding: '0px 20px',
                }}
            >
                {children}
            </main>
        </>
    )
}
