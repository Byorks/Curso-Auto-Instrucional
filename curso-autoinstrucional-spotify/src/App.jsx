import './App.css'
// Routes
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./styles.js"

// Pages
import IndexPage from './pages/home/index.jsx';
import ModulesPage from './pages/modules/modules.jsx';
import ModulesDetailPage from './pages/modules/modules_detail.jsx';

const router = createBrowserRouter ([
  {
    path: '/',
    // element: <RootLayout />,
    children: [
      { index: true, element: <IndexPage />},
      { path: "modules", element: <ModulesPage /> },
      { path: "modules/:id", element: <ModulesDetailPage /> }
    ],
  },
]);

// Theme
function App() {
  return (
    <ThemeProvider theme={theme} defaultMode='dark'>
      <CssBaseline>
        <RouterProvider router={router} />
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App
