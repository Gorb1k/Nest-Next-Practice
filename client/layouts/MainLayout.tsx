
import Navbar from "../components/Navbar";
import {Container} from "@mui/material";
import {FC, PropsWithChildren} from "react";



const MainLayout:FC<PropsWithChildren<{}>> = ({children}) => {
    return (
        <>
            <Navbar/>
            <Container style={{margin: '90px auto'}}>
                {children}
            </Container>
        </>
    );
};

export default MainLayout;