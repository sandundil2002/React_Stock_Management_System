import {HeaderComponent} from "../components/header/HeaderComponent.tsx";
import {CustomerInputComponent} from "../components/customer/CustomerInputComponent.tsx";

export const CustomerPage = () => {
    return (
        <>
            <div className="mx-5">
                <HeaderComponent section="Customer Section" />
                <CustomerInputComponent />
            </div>
        </>
    );
};