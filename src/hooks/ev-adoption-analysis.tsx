import { fetchData } from "@/api/fetch-data";
import { useEffect, useMemo, useState } from "react";
export const useFetchEVAdoption = () => {
       const [loading, setloading] = useState(false);
        const [data, setData] = useState<Record<string, string>[]>([])
    
        const fetchResults = async () => {
            setloading(true);
            const result = await fetchData();
            if(result) {
                setloading(false)
                setData(result)
            }
        }
        useEffect(() => {
           fetchResults()
        }, [])

    const evAdoptionTrend = useMemo(() => {
            const yearlyStats = {} as any;
          
            data.forEach((car) => {
              const year = Number(car["Model Year"]) ; // ensure numeric
              const type = car["Electric Vehicle Type"];
          
              if (!yearlyStats[year]) {
                yearlyStats[year] = { year, BEV: 0, PHEV: 0, Total: 0 };
              }
          
              if (type.includes("BEV")) {
                yearlyStats[year].BEV += 1;
              } else if (type.includes("PHEV")) {
                yearlyStats[year].PHEV += 1;
              }
          
              yearlyStats[year].Total = yearlyStats[year].BEV + yearlyStats[year].PHEV;
            });
            const values = Object.values(yearlyStats).sort((a:any, b:any) => a.year - b.year);
            
            return {
              labels: values.map((value:any) => value.year) || [],
              data: values.map((value:any) => value.Total) || [],
              dataTwo: values.map((value:any) => value.BEV) || [],
              dataThree: values.map((value:any) => value.PHEV) || [],
            }
    }, [data])

    return {evAdoptionTrend: evAdoptionTrend, loading}
}