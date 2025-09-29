import { Button, styled } from "@mui/material";
import { teal } from "@mui/material/colors";

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: "2rem",
  textTransform: "none",
  boxShadow: "none",
  //padding: "0.75rem 1.04013rem 0.8125rem 0.9375rem",
  height: "fit-content",
  backgroundColor: theme.palette.secondary,

  "&:hover": { 
    backgroundColor: theme.palette.secondary[600]
   },
  "&.active": { 
    backgroundColor: theme.palette.primary.main
   },
}));


export const ClassButton = ({children , active = false, props}) => {
    return (
        <StyledButton className={active ? ".active" : undefined}>
            {children}
        </StyledButton>
    )
}

export default ClassButton;