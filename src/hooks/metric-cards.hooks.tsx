import { fetchData } from "@/api/fetch-data";
import { useEffect, useMemo, useState } from "react"
import { ElectricVehicleTypeEnum } from "./interface";

export const useFetchMetricInformation = () => {
    const [loading, setloading] = useState(false);
    const [data, setData] = useState<Record<string, string| number>[]>([])

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

    const metricsData = useMemo(() => {
        const totalEvs = data.length;
        const totalBEVs = data.filter((x) => x['Electric Vehicle Type'] === ElectricVehicleTypeEnum.BEV).length;
        const totalPHEVs = data.filter((x) => x['Electric Vehicle Type'] === ElectricVehicleTypeEnum.PHEV).length;
        return {
            totalEvs,
            totalBEVs,
            totalPHEVs,
            percentageBEVs: (totalBEVs / totalEvs) * 100,
            percentagePHEVs :  (totalPHEVs / totalEvs) * 100,
        }
    }, [data])

    return {...metricsData, loading}
}