
import { Alarm, Close, DeleteOutline, Minimize, OpenInFull, Restore } from "@mui/icons-material";
import { Dialog,Box,AppBar, Toolbar, Typography,styled, InputBase, Input, TextField, Button, IconButton } from "@mui/material";
import { useState } from "react";
import {API_URLS} from "../services/api_url";
import useApi from "../hooks/useApi";

const dialogstyled = {
    height:"90%",
    width:'80%',
    maxWidth:'100%',
    maxHeight:'100%',
    borderRadius:'10px 10px 0 0'
}

const HeadStyled = styled(Box)({
    display:'flex',
    justifyContent:'space-between',
    background:'#F4BF96',
    padding:'10px 15px',
    '& > p':{
        fontWeight:'bold'
    }

})


const InputStyled = styled(Box)({
    display:'flex',
    flexDirection:'column',
    color:'#CE5A67',
    padding:10,
    marginLeft:10,
    '& > div':{
        borderBottom:'2px solid #F4EAE0',
        marginTop:'10px'
    }
})


const BottomStyled = styled(Box)({
    display:'flex',
    justifyContent:'space-between',
    padding:'10px 15px',
    '& > button':{
        background:'#F4BF96',
        marginLeft:15,
        padding:5,
        borderRadius:18,
        fontWeight:"bold",
        color:"#1F1717",
        textTransform:'none',
        width:100
    }
})

// const ComposeMail = ({ OpenDialog,SetOpenDialog }) =>{

  
//     const[data,setdata] = useState({});

//     const sentEmailServices = useAPI(API_URLS.saveSentEmails)

//     const onCross = (e) =>{
//         e.preventDefault();
//         SetOpenDialog(false);
        
//     }
// const config = {
//             Host : "smtp.elasticemail.com",
//             Username : process.env.REACT_APP_USERNAME,
//             Password : process.env.REACT_APP_PASSWORD,
//             Port:2525,
// }
//     const sendMail = (e) =>{
//         e.preventDefault();
//         if(window.Email){
//             window.Email.send({
//                 ...config,
//                 To : data.to,
//                 From : "vermabhavya783@gmail.com",
//                 Subject : data.subject,
//                 Body :data.body
//             }).then(
//               message => alert(message)
//             );
//         }
    
//         const payload = {
//             to:data.to,
//             from:"vermabhavya783@gmail.com",
//             subject : data.subject,
//             body :data.body,
//             data:new Date(),
//             image:'',
//             name:'Bhavya Verma',
//             starred:false,
//             type:'sent'
//         }

//         sentEmailServices.send(payload);
//         if(!sentEmailServices.error){
//             SetOpenDialog(false);
//             setdata({});
//         }
//         SetOpenDialog(false);
//     }
  
//     const onValueChange = (e) =>{
//         console.log(e.target.value);
//         setdata({...data,[e.target.name]: e.target.value});
//         console.log(data);
//     } 

const ComposeMail = ({ OpenDialog, SetOpenDialog }) => {
    const [data, setData] = useState({});
    const sentEmailService = useApi(API_URLS.saveSentEmails);
    // const saveDraftService = useAPI(API_URLS.saveDraftEmails);

    const config = {
        Username: process.env.REACT_APP_USERNAME,
        Password: process.env.REACT_APP_PASSWORD,
        Host: 'smtp.elasticemail.com',
        Port: 2525,
    }

    
    const onCross = (e) =>{
        e.preventDefault();
        SetOpenDialog(false);
    }

    const onValueChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const sendMail = async (e) => {
        e.preventDefault();

        if (window.Email) {
            window.Email.send({
                ...config,
                To : data.to,
                From : "vermabhavya783@gmail.com",
                Subject : data.subject,
                Body : data.body
            }).then(
                message => alert(message)
            );
        }

        const payload = {
            to : data.to,
            from : "vermabhavya783@gmail.com",
            subject : data.subject,
            body : data.body,
            date: new Date(),
            image: '',
            name: 'Bhavya Verma',
            starred: false,
            type: 'sent'
        }

        sentEmailService.call(payload);
        console.log(payload)
        if (!sentEmailService.error) {
            
            SetOpenDialog(false);
            setData({});
        } else {

        }

    }

    // const closeComposeMail = (e) => {
    //     e.preventDefault();

    //     const payload = {
    //         to : data.to,
    //         from : "codeforinterview03@gmail.com",
    //         subject : data.subject,
    //         body : data.body,
    //         date: new Date(),
    //         image: '',
    //         name: 'Code for Interview',
    //         starred: false,
    //         type: 'drafts'
    //     }

    //     saveDraftService.call(payload);

    //     if (!saveDraftService.error) {
    //         setOpenDrawer(false);
    //         setData({});
    //     } else {

    //     }
    // }


    return(
        <>
        <Dialog
        open = {OpenDialog}
        PaperProps={{sx:dialogstyled}}
        >
            <HeadStyled>
            <Typography>
                New Messsage
            </Typography>
            <Box>      
            <IconButton onClick={(e) => onCross(e)}><Close /></IconButton>
                </Box>
            </HeadStyled>
            <InputStyled>
            <InputBase placeholder="Reciepent" name="to" inputProps={{style: {color: '#1F1717',},}} onChange={(e) => onValueChange(e)} />
            <InputBase placeholder="Subject" name="subject" inputProps={{style: {color: '#1F1717',},}} onChange={(e) => onValueChange(e)} />
            </InputStyled>
            <TextField multiline rows={18} name="body" sx={{'& .MuiOutlinedInput-notchedOutline ': {border:'none'}}} InputProps={{style: {color: '#1F1717',},}} onChange={(e) => onValueChange(e)} />
      <BottomStyled>
      <Button onClick={(e) => sendMail(e)}>Send</Button>
            <DeleteOutline onClick= {() => SetOpenDialog(false)} />
      </BottomStyled>
            
        </Dialog>
        </>
    )
}

export default ComposeMail;
