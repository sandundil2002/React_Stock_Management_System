import {Outlet} from "react-router-dom";
import {NavbarComponent} from "./NavbarComponent.tsx";

export const RootLayoutComponent = () => {
    return (
        <>
            <NavbarComponent></NavbarComponent>
            <Outlet></Outlet>
        </>
    );
};