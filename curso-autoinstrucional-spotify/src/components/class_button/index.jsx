import { Button, styled } from "@mui/material";
import { useState } from "react";


const StyledButton = styled(Button)(({ theme, active }) => ({
  borderRadius: "2rem",
  textTransform: "none",
  boxShadow: "none",
  //padding: "0.75rem 1.04013rem 0.8125rem 0.9375rem",
  height: "fit-content",
  marginLeft: { xs: "8px", md:"1rem"},
  marginRight: { xs: "8px", md:"1rem"},
  backgroundColor: active ? theme.palette.primary.main : theme.palette.secondary[800],
  color: active ? theme.palette.secondary[1000] : theme.palette.primary[100],
  "&:hover": { 
    backgroundColor: active ? "" : theme.palette.secondary[700],
    border: active ? `solid 1px ${theme.palette.primary[50]}` : "", 
  },
  

}));

// const useStyles = makeStyles(({theme}) =>  ({
//   active: {
//     backgroundColor: theme.palette.primary.main
//   },
// }));

export const ClassButton = ({children , active = false, className, ...props }) => {
    return (
        <StyledButton 
        className={className} active={active} {...props}>
            {children}
        </StyledButton>
    )
}

export default ClassButton;