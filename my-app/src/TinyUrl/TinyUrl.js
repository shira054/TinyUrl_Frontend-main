import React, { useEffect } from "react"
import "./Componnent/TinyUrl.css"
import Login from "./Componnent/Login"
import Text from "./Componnent/Text"
import Service from "./Componnent/Service"
import SwipeableTemporaryDrawer from './Componnent/SwipeableTemporaryDrawer'
import SimpleBottomNavigation from "./Componnent/SimpleBottomNavigation";
import SignUp from './Componnent/SignUp';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>


const TinyUrl = () =>{
//  useEffect(()=>{//בעת ריענון הדף מוחק מה localstorage
//    localStorage.clear();
//  },[])
// const [name, setName] = React.useState(localStorage.getItem('name'));
    const name = localStorage.getItem("name") || " ";
    const firstName =name[0];
    const [open, setOpen] = React.useState(true);

  return(
        <>
         {name&&( 
            <Collapse in={open}>
            <Alert
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
             You exist in the system! We are glad you chose to use our site...
            </Alert>
          </Collapse>
     
                )}
        <div className="flex">
           <h1 className="h1">TinyUrl</h1>
           {/* <Stack direction="row" spacing={2}>   
               <Avatar alt="Travis Howard" {...name[0]}/>
                    </Stack> */}
                     <h1 style={{color:'#660066'}}>{firstName}</h1>
                 
                   
        <SimpleBottomNavigation className="SimpleBottomNavigation"/>
         {/* <SwipeableTemporaryDrawer/> */}
        {/* <ul>
          <li><a class="active" href="#home">My URLs</a></li>
          <li><a href="#news">Plans</a></li>
          <li>
            <a href="#contact" >Sign Up</a>
           
            </li>
          <li><a href="#about">Sign In</a></li>
        </ul> */}
        </div>
       
       
        <div className="flex">
         {/* <SignUp></SignUp> */}
         <div className="log">
        <Login />
        </div>
        <Text/>
         {/* <Service/> */}
        </div>
      
      
        </>
    )
}


export default TinyUrl;