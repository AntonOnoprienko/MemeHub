import { Link as HeroLink } from "@heroui/react"
import { NavLink } from "react-router-dom"
import {FC,ReactNode} from "react";

interface CustomLinkProps {
    to: string;
    children: ReactNode;
    onPress?: () => void;
}

const CustomLink:FC<CustomLinkProps> = ({ to, children,onPress }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => isActive ? "text-primary underline" : "text-foreground"}
            onClick={onPress}
        >
            <HeroLink as="span" color="foreground">
                {children}
            </HeroLink>
        </NavLink>
    )
}

export default CustomLink;