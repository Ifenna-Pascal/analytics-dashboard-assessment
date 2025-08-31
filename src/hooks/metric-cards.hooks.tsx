import { fetchData } from '@/api/fetch-data';
import { useEffect, useMemo, useState } from 'react';
import { ElectricVehicleTypeEnum } from './interface';

export const useFetchMetricInformation = () => {
  const [loading, setloading] = useState(false);
  const [data, setData] = useState<Record<string, string | number>[]>([]);

  const fetchResults = async () => {
    setloading(true);
    const result = await fetchData();
    if (result) {
      setloading(false);
      setData(result);
    }
  };
  useEffect(() => {
    fetchResults();
  }, []);

  const metricsData = useMemo(() => {
    const totalEvs = data.length;
    const totalBEVs = data.filter(
      (x) => x['Electric Vehicle Type'] === ElectricVehicleTypeEnum.BEV
    ).length;
    const totalPHEVs = data.filter(
      (x) => x['Electric Vehicle Type'] === ElectricVehicleTypeEnum.PHEV
    ).length;

    const yearCounts: Record<string, number> = {};
    data.forEach((item) => {
      const year = String(item['Model Year']);
      yearCounts[year] = (yearCounts[year] || 0) + 1;
    });

    const totalYears = Object.keys(yearCounts).length;
    const totalVehicles = Object.values(yearCounts).reduce((a, b) => a + b, 0);
    const averagePerYear = totalYears > 0 ? Math.round(totalVehicles / totalYears) : 0;

    return {
      totalEvs,
      totalBEVs,
      totalPHEVs,
      percentageBEVs: (totalBEVs / totalEvs) * 100,
      percentagePHEVs: (totalPHEVs / totalEvs) * 100,
      averagePerYear,
    };
  }, [data]);

  return { ...metricsData, loading };
};
