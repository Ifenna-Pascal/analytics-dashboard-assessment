import { fetchData } from '@/api/fetch-data';
import { useEffect, useMemo, useState } from 'react';
export const useFetchEVByCountry = () => {
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
    const countryStats = {} as any;

    data.forEach((car) => {
      const country = car['County'];
      const type = car['Electric Vehicle Type'];

      if (!countryStats[country]) {
        countryStats[country] = { country, BEV: 0, PHEV: 0, Total: 0 };
      }

      if (type.includes('BEV')) {
        countryStats[country].BEV += 1;
      } else if (type.includes('PHEV')) {
        countryStats[country].PHEV += 1;
      }

      countryStats[country].Total = countryStats[country].BEV + countryStats[country].PHEV;
    });
    const values = Object.values(countryStats).sort((a: any, b: any) => a.country - b.country);
    console.log(values, 'valuesss');
    return {
      labels: values.map((value: any) => value.country) || [],
      total: values.map((value: any) => value.Total) || [],
      bevs: values.map((value: any) => value.BEV) || [],
      phevs: values.map((value: any) => value.PHEV) || [],
    };
  }, [data]);

  return { analysisByCountry: evAdoptionTrend, loading };
};
