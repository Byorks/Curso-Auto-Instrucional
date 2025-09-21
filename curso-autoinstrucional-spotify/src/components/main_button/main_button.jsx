import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function MainButton({ path, children, color, variant }) {
    return (
        <Link to={path}>
            <Button color={color} variant={variant}>{children}</Button>
        </Link>
    );
}
