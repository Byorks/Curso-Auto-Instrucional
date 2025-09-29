import {
  Box,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Typography,
  Grid,
  styled
} from "@mui/material";
import { Link } from "react-router-dom";

// Uma forma de aplicar sobrescrevendo a classe do MUI
const StyledLink = styled(Link)(({theme}) => ({
    // "&:hover": {
    //     '& .MuiCard-root':{
    //         backgroundColor: "red",
    //     }
    // }
}));

export default function CardModule({ id, title, description, imgpath }) {
  return (
    <StyledLink relative="" to={`${id}`}>
      <Card
        sx={(theme) =>({
          display: "flex",
          width: "100%",
          height: {xs: "auto", sm: "18vh", md: "21vh"},
          cursor: "pointer",
          borderRadius: "0.75rem",
          flexDirection: {xs:"column", sm: "row"},
          boxShadow: "none",
          transition: "background-color .3s ease-in-out, transform .15s ease-out",
          "&:hover": {
            backgroundColor: theme.palette.secondary.main,
            border: `.2px solid ${theme.palette.secondary[400]}`,
            transform: "scale(1.02)",
          }
            
        })}
      >
        <Box
          sx={{
            padding: "1rem",
            width: {xs:"100%", sm: "25%"},
            height: {xs:"auto", sm:"auto"},
            aspectRatio: {xs:"auto", sm:"1/1"},
          }}
        >
          <CardMedia
            component="img"
            image={imgpath}
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: ".5rem",
            }}
          />
        </Box>
        <Box sx={{}}>
          <CardContent>
            <Typography component="h3" 
                sx={{
                    fontSize: "1.5rem",
                    fontWeight: "600",
                    lineHeight: "normal",
                    fontSt: "normal"
                }}
            >{title}</Typography>
            <Typography variant="body2" component="p" 
                sx={{
                    fontSize:{xs: "", sm:".85rem", lg: "1rem"}
                }} >
              {description}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </StyledLink>
  );
}
