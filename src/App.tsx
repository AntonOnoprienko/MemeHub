import { MemeProvider } from "./context/MemeContext";
import AppRouter from "./router/AppRouter";
import {BrowserRouter} from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <MemeProvider>
             <AppRouter />
            </MemeProvider>
        </BrowserRouter>
    );
}
