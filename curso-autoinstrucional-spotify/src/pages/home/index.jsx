import { Typography } from "@mui/material";
import MainButton from "../../components/main_button/main_button";

export default function IndexPage () {
    return (
        <main className="flex items-center justify-center h-dvh flex-col gap-2">
            <Typography variant="h3" component="h1">Nome do curso</Typography>
            <MainButton path={"/modules"} color="violet" variant="contained">Bora começar esse Curso</MainButton>
        </main>
    );
}