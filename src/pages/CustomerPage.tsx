import {HeaderComponent} from "../components/header/HeaderComponent.tsx";
import {InputFieldsComponent} from "../components/customer/InputFieldsComponent.tsx";
import {ButtonComponent} from "../components/customer/ButtonComponent.tsx";
import {CustomerTableComponent} from "../components/customer/CustomerTableComponent.tsx";

export const CustomerPage = () => {
    return (
        <>
            <HeaderComponent section="Customer Section" />
            <InputFieldsComponent />
            <ButtonComponent />
            <CustomerTableComponent />
        </>
    );
};