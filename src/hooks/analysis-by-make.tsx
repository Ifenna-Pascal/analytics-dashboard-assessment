import { fetchData } from '@/api/fetch-data';
import { useEffect, useMemo, useState } from 'react';
export const useFetchEVByVehicleModel = () => {
  const [loading, setloading] = useState(false);
  const [data, setData] = useState<Record<string, string>[]>([]);

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

  const evAdoptionTrend = useMemo(() => {
    const modelCount: Record<string, number> = {};

    data.forEach((car) => {
      const modelName = `${car.Make} ${car.Model}`;
      modelCount[modelName] = (modelCount[modelName] || 0) + 1;
    });

    const sortedModels = Object.entries(modelCount).sort((a, b) => b[1] - a[1]);

    const top5 = sortedModels.slice(0, 5);

    return {
      labels: top5.map(([model]) => model),
      counts: top5.map(([_, count]) => count),
    };
  }, [data]);

  return { analysisByModel: evAdoptionTrend, loading };
};
