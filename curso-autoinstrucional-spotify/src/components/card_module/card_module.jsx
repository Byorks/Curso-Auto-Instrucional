import { 
    Box,
    Card,
    CardMedia,
    CardContent,
    IconButton,
    Typography
} from "@mui/material"
import { Link } from "react-router-dom"

export default function CardModule ( {id, title, description, imgpath} ) {
    return (
        <Link to={`/modules/${id}`}>
            <Card sx={{display: "flex", width: "100%", height: "15vh", cursor: "pointer"}}>
                <CardMedia component="img" image={imgpath}
                    sx={{
                        width: "30%"
                    }}
                />
                <Box sx={{
                    }}>
                    <CardContent>
                        <Typography component="h3">{title}</Typography>
                        <Typography variant="body2" component="p">{description}</Typography>
                    </CardContent>
                </Box>
            </Card>
        </Link>
    )
}