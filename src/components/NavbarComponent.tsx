import * as React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Image,
} from "@heroui/react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import ThemeSwitcher from "./ThemeSwitcher";

const navLinks = [
    { label: "Table", to: "/table" },
    { label: "List", to: "/list" },
    { label: 'Redux', to:"/redux"}
];

const NavbarComponent: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <Navbar className={'py-2'} onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavLink to={'/list'}>
                <NavbarBrand >
                    <Image alt="Logo" src={logo} width={50} />
                    <p className="font-bold text-inherit ml-3">MEMEHUB</p>
                </NavbarBrand>
                </NavLink>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {navLinks.map(({ label, to }) => (
                    <NavbarItem key={to}>
                        <NavLink
                            to={to}
                            className={({ isActive }) =>
                                `transition-colors font-medium ${
                                    isActive ? "text-primary" : "text-foreground"
                                }`
                            }
                        >
                            {label}
                        </NavLink>
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarMenu>
                {navLinks.map(({ label, to }) => (
                    <NavbarMenuItem key={to}>
                        <NavLink
                            to={to}
                            className={({ isActive }) =>
                                `block w-full py-2 text-2xl font-bold ${
                                    isActive ? "text-primary" : "text-foreground"
                                }`
                            }
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {label.toUpperCase()}
                        </NavLink>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
            <NavbarContent justify={'end'}>
                <NavbarItem>
                    <ThemeSwitcher />
                </NavbarItem>
            </NavbarContent>

        </Navbar>
    );
};

export default NavbarComponent;
