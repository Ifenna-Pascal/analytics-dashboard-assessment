import { BarChart, LineChart } from "@/components/ui/charts"
import { useFetchEVAdoption } from "@/hooks"
import { useFetchEVByCountry } from "@/hooks/analysis-by-country";
import { cn } from "@/lib";
import { useState } from "react";

export const EVTrendsPerYear = () => {
    const {loading, evAdoptionTrend} = useFetchEVAdoption();
    const {loading:isLoading, analysisByCountry } = useFetchEVByCountry();

    const [chartType, setChartType] = useState<'line' | 'bar'>('line')
    return (
		<div>
            <div className="grid gap-6 w-full md:grid-cols-1"> 
          {
            chartType === 'line' ?   <LineChart 
            title="Electric Car Trends Per Year"
            info=""
            labels={evAdoptionTrend.labels}
            data={evAdoptionTrend.data}
            dataTwo={evAdoptionTrend.dataTwo}
            dataThree={evAdoptionTrend.dataThree}
            isLoading={loading}
        />: 
        <BarChart 
        title="Electric Car Trends Per Year"
        countries={analysisByCountry.labels}
        bevs={analysisByCountry.bevs}
        totalEVs={analysisByCountry.total}
        phevs={analysisByCountry.phevs}
        isLoading={isLoading}
        />
          }
        </div>
        <div className="flex item-center mt-4 space-x-4 justify-center"> 
            <div 
            onClick={() => setChartType('line')}
            className={
                cn(
                    "w-[40px] h-[6px] cursor-pointer mr-2 rounded-[6px]",
                    chartType === 'line' ? "bg-blue-400" : "bg-gray-200"

                )
            }></div>
             <div 
            onClick={() => setChartType('bar')}
             
             className={
                cn(
                    "w-[40px] h-[6px] cursor-pointer rounded-[6px]",
                    chartType === 'bar' ? "bg-blue-400" : "bg-gray-200"

                )
            }></div>
        </div>
        </div>
     
    )
}