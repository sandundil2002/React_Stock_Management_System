import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import {Item} from "../../models/item.ts";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

type DashboardChartProps = {
    items: Item[];
};

export const DashboardChartComponent = ({ items }: DashboardChartProps) => {
    const categoryData = items.reduce((acc: { [key: string]: number }, item: Item) => {
        if (acc[item.category]) {
            acc[item.category] += item.quantity;
        } else {
            acc[item.category] = item.quantity;
        }
        return acc;
    }, {});

    const categories = Object.keys(categoryData);
    const quantities = Object.values(categoryData);

    const data = {
        labels: categories,
        datasets: [
            {
                label: "Item Quantity",
                data: quantities,
                backgroundColor: [
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 205, 86, 0.2)",
                ],
                borderColor: [
                    "rgba(75, 192, 192, 1)",
                    "rgba(255, 159, 64, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 205, 86, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top" as const,
            },
            title: {
                display: true,
                text: "Item Quantity by Category",
            },
        },
    };

    return (
        <div className="w-full max-w-5xl capitalize mx-auto mt-10">
            <Bar data={data} options={options} />
        </div>
    );
};
