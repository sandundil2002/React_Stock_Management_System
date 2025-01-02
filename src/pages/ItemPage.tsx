import {HeaderComponent} from "../components/header/HeaderComponent.tsx";
import {ItemInputComponent} from "../components/item/ItemInputComponent.tsx";

export const ItemPage = () => {
    return (
        <>
            <HeaderComponent section="Item Section" />
            <ItemInputComponent />
        </>
    );
};