import {
  Grid,
  Container,
  Box,
  Typography,
  Card,
  RadioGroup,
  Radio,
  FormControl,
  FormControlLabel,
  FormLabel,
} from "@mui/material";
import CardModule from "../../components/card_module/card_module";
import ToggleColorMode from "../../components/toggle_color_mode";

export default function ModulesPage() {


  // Transformar card em lista
  let MODULESCARD = [
    {
      id: 1,
      title: "Modulo 1",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      imgpath:
        "https://imgs.search.brave.com/yqoDzXEmFHgDb15U76CfaFOAf7mAWzxpfONFjC24CKw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cGF0YXNkYWNhc2Eu/Y29tLmJyL3NpdGVz/L2RlZmF1bHQvZmls/ZXMvc3R5bGVzL2dh/bGxlcnlfY3JvcC9w/dWJsaWMvaW1hZ2Vz/LWNhcnJvc3NlbC8x/NDk2My1mb3Rvcy1k/ZS1jYWNob3Jyby1w/b29kbGUtYXByb3Zl/aXRlLXNlbXAtb3Jp/Zy0xLndlYnA_aXRv/az1VQzdkV1BVUQ",
    },
    {
      id: 2,
      title: "Modulo 2",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      imgpath:
        "https://imgs.search.brave.com/yqoDzXEmFHgDb15U76CfaFOAf7mAWzxpfONFjC24CKw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cGF0YXNkYWNhc2Eu/Y29tLmJyL3NpdGVz/L2RlZmF1bHQvZmls/ZXMvc3R5bGVzL2dh/bGxlcnlfY3JvcC9w/dWJsaWMvaW1hZ2Vz/LWNhcnJvc3NlbC8x/NDk2My1mb3Rvcy1k/ZS1jYWNob3Jyby1w/b29kbGUtYXByb3Zl/aXRlLXNlbXAtb3Jp/Zy0xLndlYnA_aXRv/az1VQzdkV1BVUQ",
    },
    {
      id: 3,
      title: "Modulo 3",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      imgpath:
        "https://imgs.search.brave.com/yqoDzXEmFHgDb15U76CfaFOAf7mAWzxpfONFjC24CKw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cGF0YXNkYWNhc2Eu/Y29tLmJyL3NpdGVz/L2RlZmF1bHQvZmls/ZXMvc3R5bGVzL2dh/bGxlcnlfY3JvcC9w/dWJsaWMvaW1hZ2Vz/LWNhcnJvc3NlbC8x/NDk2My1mb3Rvcy1k/ZS1jYWNob3Jyby1w/b29kbGUtYXByb3Zl/aXRlLXNlbXAtb3Jp/Zy0xLndlYnA_aXRv/az1VQzdkV1BVUQ",
    },
  ];

  return (
    <main className="h-dvh flex items-center">
      <Box
        sx={{
          width: "80%",
          margin: "0 auto",
          maxWidth: 1128,
        }}
      >
        <Grid>
          {/* <ToggleColorMode   /> */}
        </Grid>
        <Grid container spacing={5}>
          <Typography variant="h4" component="h2">
            Módulos
          </Typography>
          {MODULESCARD.map((card) => (
            <CardModule key={card.id} {...card} />
          ))}
        </Grid>
      </Box>
    </main>
  );
}
