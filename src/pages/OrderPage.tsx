import {HeaderComponent} from "../components/header/HeaderComponent.tsx";
import OrderInputComponent from "../components/order/OrderInputComponent.tsx";

export const OrderPage = () => {
    return (
        <>
            <div className="mx-5">
                <HeaderComponent section="Order Section"/>
                <OrderInputComponent/>
            </div>
        </>
    );
};