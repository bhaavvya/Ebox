
import { Close, Minimize, OpenInFull } from "@mui/icons-material";
import { Dialog,Box,AppBar, Toolbar, Typography,styled } from "@mui/material";

const dialogstyled = {
    height:"90%",
    width:'80%',
    maxWidth:'100%',
    maxHeight:'100%',
    borderRadius:'10px 10px 0 0'
}

const HeadStyled = styled(Box)({
    display:'flex',
    justifyContent:'space-between'

})

const ComposeMail = () =>{

    return(
        <>
        <Dialog
        open = {true}
        PaperProps={{sx:dialogstyled}}
        >
            <HeadStyled>
            <Typography>
                New Messsage
            </Typography>
            <Box><Minimize />
                <OpenInFull fontSize="small"/>
                <Close /></Box>
            
            
            </HeadStyled>
            <Box>
            To and from part
            </Box>
            <Box>Textfield</Box>
            <Box>bottom line</Box>
        </Dialog>
        </>
    )
}

export default ComposeMail;
