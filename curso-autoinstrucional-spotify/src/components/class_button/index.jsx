import { Button, styled } from "@mui/material";

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: "2rem",
  textTransform: "none",
  boxShadow: "none",
  padding: "0.75rem 1.04013rem 0.8125rem 0.9375rem",

  "&:hover": { 
    backgroundColor: ""
   },
}));


export const ClassButton = ({children}) => {
    return (
        <StyledButton>
            {children}
        </StyledButton>
    )
}

export default ClassButton;