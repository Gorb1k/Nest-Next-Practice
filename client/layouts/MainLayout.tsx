
import Navbar from "../components/Navbar";
import {Container} from "@mui/material";
import {FC, PropsWithChildren} from "react";
import Player from "../components/Player";



const MainLayout:FC<PropsWithChildren<{}>> = ({children}) => {
    return (
        <>
            <Navbar/>
            <Container style={{margin: '90px auto'}}>
                {children}
            </Container>
            <Player/>
        </>
    );
};

export default MainLayout;