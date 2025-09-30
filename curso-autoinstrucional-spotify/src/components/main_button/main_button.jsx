import { Button, styled } from "@mui/material";
import { Link } from "react-router-dom";

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: "2rem",
  textTransform: "none",
  boxShadow: "none",
  "&:hover": { 
    backgroundColor: ""
   },
}));

export default function MainButton({ path, children, color, variant }) {
  return (
    <Link to={path}>
      <StyledButton color={color} variant={variant}>
        {children}
      </StyledButton>
    </Link>
  );
}
