import { CreateOutlined } from "@mui/icons-material";
import { Button,Box,styled,List,ListItem } from "@mui/material";
import { SIDEBAR_DATA } from "../config/sidebar.config";
import './ComposeMail';
import ComposeMail from "./ComposeMail";
import { useState } from "react";



const ComposeButton = styled(Button)({
    background:'#FCF5ED',
    color: '#CE5A67',
    padding:15,
    borderRadius:16,
    minWidth:140,
    textTransform:'none'
})

const Container = styled(Box)({
    padding:8,
    '& > ul':{
        padding:'10px 0px 0px 5px',
        cursor: 'pointer',
        fontSize:14,
        fontWeight:500    
    },
    '& > ul > li > svg':{
        marginRight:20
    }
})

const SideBarContent = () =>{

    const[OpenDialog,SetOpenDialog] = useState(false);

    const OnComposeClick = () =>{
        SetOpenDialog(true);
    }


    return(
        <>
            <Container>
            <ComposeButton onClick={OnComposeClick}>
                <CreateOutlined />Compose
            </ComposeButton>
            <List>
                {
                    SIDEBAR_DATA.map(data =>(
                        <ListItem style={{color:'#CE5A67'}}>
                        <data.icon fontSize="small"/>
                            {data.title}
                        </ListItem>
                    ))
                }
            </List>
            <ComposeMail OpenDialog={OpenDialog} SetOpenDialog={SetOpenDialog} />
            </Container>
        </>
    )
}

export default SideBarContent;
