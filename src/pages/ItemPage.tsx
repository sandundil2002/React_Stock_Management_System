import {HeaderComponent} from "../components/header/HeaderComponent.tsx";
import {ItemInputComponent} from "../components/item/ItemInputComponent.tsx";

export const ItemPage = () => {
    return (
        <>
            <div className="mx-5">
                <HeaderComponent section="Item Section"/>
                <ItemInputComponent/>
            </div>
        </>
    );
};