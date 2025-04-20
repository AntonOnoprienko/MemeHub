import { Outlet } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";
import Container from "./Container";
import Footer from "./Footer";

const MainLayout = () => (
    <>
        <NavbarComponent />
        <Container>
            <Outlet />
        </Container>
        <Footer />
    </>
);

export default MainLayout;
