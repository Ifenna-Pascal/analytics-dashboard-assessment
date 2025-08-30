import { BAR_CHART_OPTIONS, LINE_CHART_OPTIONS } from "@/app/config/chart.config";
import { LineChartMetricsLoader } from "@/app/loaders";
import { ReactNode } from "react";
import { Bar, Line } from "react-chartjs-2";
import {
    BarElement,
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LineElement,
	LinearScale,
	PointElement,
	Title,
	Tooltip,
} from "chart.js";

ChartJS.register(
	CategoryScale,
	LineElement,
	PointElement,
	LinearScale,
	Tooltip,
	Legend,
	Title,
    BarElement
);

export function LineChart({
	title,
	labels,
	data,
    dataTwo,
    dataThree,
	isLoading = false,
}: {
	title: string;
	info?: ReactNode;
	labels: string[];
	data: number[];
    dataTwo: number[];
    dataThree: number[];
	isLoading?: boolean;
}) {
	return (
		<div className="grid gap-4 overflow-auto rounded-lg bg-white">
			<div className="grid gap-1 px-4 py-6 pb-0 md:px-4">
				<h1 className="font-medium text-base text-grey-600 uppercase">{title}</h1>
			</div>
			{isLoading ? (
				<LineChartMetricsLoader />
			) : (
				
					<Line
					data={{
						labels: labels,
						datasets: [
							{
								label: "Total",
								data: data,
								fill: false,
								borderColor: "rgba(164, 202, 255, 1)",
								borderWidth: 4,
								pointStyle: false,
								backgroundColor: "rgba(164, 202, 255, 1)",
								tension: 0.0,
							},
                            {
								label: 'Total BEVs',
								data: dataTwo,
								fill: false,
								borderColor: "rgba(255, 99, 132, 1)",
								borderWidth: 4,
								pointStyle: false,
								backgroundColor: "rgba(255, 99, 132, 1)",
								tension: 0.0,
							},
                            {
								label: 'Total PHEVs',
								data: dataThree,
								fill: false,
								borderColor: "rgba(255, 206, 86, 1)",
								borderWidth: 4,
								pointStyle: false,
								backgroundColor: "rgba(255, 206, 86, 1)",
								tension: 0.0,
							},
						],
					}}
					options={LINE_CHART_OPTIONS}
				/>
			)}
		</div>
	);
}

export function BarChart ({
    countries,
    totalEVs,
    bevs,
    phevs,
    title,
    isLoading
}: {    
    countries: string[],
    totalEVs: number[],
    bevs: number[],
    phevs: number[],
    title:string;
    isLoading: boolean
}) {
    const data = {
        labels: countries,
        datasets: [
          {
            label: "Total EVs",
            data: totalEVs,
            backgroundColor: "rgba(164, 202, 255, 1)",
          },
          {
            label: "BEVs",
            data: bevs,
            backgroundColor: "rgba(255, 99, 132, 1)",
          },
          {
            label: "PHEVs",
            data: phevs,
            backgroundColor: "rgba(255, 206, 86, 1)",
          },
        ],
      };
   
    
      return (
       
        	<div className="grid gap-4 overflow-auto rounded-lg bg-white">
			<div className="grid gap-1 px-4 py-6 pb-0 md:px-6">
				<h1 className="font-medium text-base text-grey-900 capitalize">{title}</h1>
			</div>
			{isLoading ? (
				<LineChartMetricsLoader />
			) : (
                <Bar data={data} options={BAR_CHART_OPTIONS} />

			)}
		</div>
      );
    
}


