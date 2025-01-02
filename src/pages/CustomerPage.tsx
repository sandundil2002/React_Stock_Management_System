import {HeaderComponent} from "../components/header/HeaderComponent.tsx";
import {CustomerInputComponent} from "../components/customer/CustomerInputComponent.tsx";

export const CustomerPage = () => {
    return (
        <>
            <HeaderComponent section="Customer Section" />
            <CustomerInputComponent />
        </>
    );
};