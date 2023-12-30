import {AppBar,Toolbar,styled,InputBase,Box} from '@mui/material'
import TuneIcon from '@mui/icons-material/Tune';
import {Menu as MenuIcon,HelpOutlineOutlined,SettingsOutlined,AppsOutlined,AccountCircleOutlined} from '@mui/icons-material'
import { gmailLogo } from '../constants/constant'
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import {IconButton} from '@mui/material';



const StyledAppBar = styled(AppBar)({
    background:'#FCF5ED'
})

const StyledBox = styled(Box)({
    background:'#FCF5ED',
    marginLeft:80,
    borderRadius:8,
    minWidth:690,
    maxwidth:720,
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    '& > div':{
        width:'100%',
        padding:'0 10px'
    }
})

const OptionsWrapper = styled(Box)({
    width: '100%',
    display: 'flex',
    justifyContent:'end',
    '& > svg':{
        marginLeft:20
    }
})

const Header = ({ toggleDrawer }) =>{
    return(
        <>
            <div>
                <StyledAppBar position='static'>
                    <Toolbar>
                    <IconButton onClick={toggleDrawer}>
      <MenuIcon style={{ color: 'red', width: 65, height: 45 }} />
    </IconButton>
                        <img src={gmailLogo} alt='LOGO' style={{width: 65,height:75}}/><h1 style={{color:'#1F1717'}}>EBox</h1>

                        <StyledBox>

                            <ContentPasteSearchIcon style={{color:'#CE5A67',width:45,height:45}}/>
                            <InputBase style={{ borderBottom: '2px solid #CE5A67' }} placeholder='Search mail' />
                            <TuneIcon style={{color:'#CE5A67',width:45,height:45}} />

                        </StyledBox>

                        <OptionsWrapper>
                            <HelpOutlineOutlined style={{color:'#CE5A67',width:45,height:45}} />
                            <SettingsOutlined style={{color:'#CE5A67',width:45,height:45}} />
                            <AppsOutlined style={{color:'#CE5A67',width:45,height:45}} />
                            <AccountCircleOutlined style={{color:'#CE5A67',width:45,height:45}} />
                        </OptionsWrapper>




                    </Toolbar>
                </StyledAppBar>
                
            </div>
        </>
    )
}

export default Header;

