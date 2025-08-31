import { fetchData } from '@/api/fetch-data';
import { useEffect, useMemo, useState } from 'react';
export const useFetchTopVehiclesByRange = () => {
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

  const grouped = {} as Record<string, number[]>;
  data.forEach((car) => {
    const make = car.Make;
    const msrp = Number(car['Base MSRP']);
    if (!grouped[make]) {
      grouped[make] = [];
    }
    if (msrp > 0) grouped[make].push(msrp);
  });
  const evAdoptionTrend = useMemo(() => {
    return Object.entries(grouped).map(([make, prices]) => {
      const avg = prices.reduce((a, b) => a + b, 0) / prices.length;
      const min = Math.min(...prices);
      const max = Math.max(...prices);
      return {
        make,
        avgMSRP: Math.round(avg),
        minMSRP: min,
        maxMSRP: max,
        count: prices.length,
      };
    });
  }, [grouped]);

  return { analysisByPrice: evAdoptionTrend, loading };
};
