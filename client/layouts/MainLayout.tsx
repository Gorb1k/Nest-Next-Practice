import Navbar from "../components/Navbar";
import {Container} from "@mui/material";
import {FC, PropsWithChildren} from "react";
import Player from "../components/Player";
import Head from "next/head";

interface MainLayoutProps {
    title?: string
    description?: string
    keywords?: string

}

const MainLayout: FC<PropsWithChildren<MainLayoutProps>> = ({
                                                                children,
                                                                title,
                                                                description,
                                                                keywords
                                                            }) => {
    return (
        <>
            <Head>
                <title>{title || 'Music Platform'}</title>
                <meta name={'description'} content={'Music platform.' + description}/>
                <meta name={'robots'} content={'index, follow'}/>
                <meta name={'keywords'} content={keywords || 'Music platform, music, track, pop, artist, lyrics'}/>
                <meta name={'viewport'} content={'width=device-width, initial-scale=1'}/>
            </Head>
            <Navbar/>
            <Container style={{margin: '90px auto'}}>
                {children}
            </Container>
            <Player/>
        </>
    );
};

export default MainLayout;