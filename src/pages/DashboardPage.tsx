import {HeaderComponent} from "../components/header/HeaderComponent.tsx";
import {DashboardChartComponent} from "../components/dashboard/DashboardChartComponent.tsx";
import {useSelector} from "react-redux";

export const DashboardPage = () => {
    // @ts-ignore
    const item = useSelector((state) => state.item);

    return (
        <>
            <HeaderComponent section="Dashboard Section" />
            <DashboardChartComponent items={item} />
        </>
    );
};