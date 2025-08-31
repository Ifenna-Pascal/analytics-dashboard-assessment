'use client';
import { useFetchEVByVehicleModel } from '@/hooks/analysis-by-make';
import { Chart as ChartJS, ArcElement, Legend, Tooltip, Title } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

export default function TopModelsChart() {
  const {
    analysisByModel: { labels, counts },
    loading,
  } = useFetchEVByVehicleModel();

  const data = {
    labels: labels || [],
    datasets: [
      {
        label: 'EV Count',
        data: counts || [],
        backgroundColor: ['#6baed6', '#fdae6b', '#74c476', '#fb6a4a', '#9e9ac8'],
        borderColor: '#fff',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      title: {
        display: false,
        text: 'Top 5 EV Models',
      },
    },
  };

  return (
    <div className="bg-white p-3 py-6 flex-col flex items-center justify-center rounded-xl">
      <h1 className="font-medium text-[14px] mb-4 text-grey-900 capitalize">
        Top 5 Electric Vehicle Models
      </h1>

      <Pie data={data} options={options} />
    </div>
  );
}
