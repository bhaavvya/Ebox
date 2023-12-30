import { Drawer,styled } from "@mui/material";
import SideBarContent from "./SideBarContent";



const SideBar = ({ OpenDrawer }) =>{
    return(
        <>
            <div>
                <Drawer 
                    anchor='left'
                    open = {OpenDrawer}
                    hideBackdrop = {true}
                    ModalProps={{
                        keepMounted : 'true'
                    }}
                    variant="persistent"
                    sx={{
                        '& .MuiDrawer-paper' : {
                            marginTop:'85px',
                            width:250,
                            background:'#F4EAE0',
                            borderRight:'none',
                            height: 'calc(100vh - 85px)'
                        }
                    }}
                >
                    <SideBarContent />
                </Drawer>
            </div>
        </>
    )
}

export default SideBar;


