import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { useState } from "react";

const Main = () =>{

    const[OpenDrawer,SetOpenDrawer] = useState(true);
    const toggleDrawer = () =>{
        SetOpenDrawer(prevState => !prevState);
    }
    return(
        <>
            <Header toggleDrawer={toggleDrawer} />
            <SideBar OpenDrawer={OpenDrawer} />
            <div>Actual Mails</div>
        </>
    )
}

export default Main;

