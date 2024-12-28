import {HeaderComponent} from "../components/header/HeaderComponent.tsx";
import {InputFieldsComponent} from "../components/customer/InputFieldsComponent.tsx";

export const CustomerPage = () => {
    return (
        <>
            <HeaderComponent section="Customer Section" />
            <InputFieldsComponent />
        </>
    );
};