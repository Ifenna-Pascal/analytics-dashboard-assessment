import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { useFetchMetricInformation } from '@/hooks';
import { ArrowDown, ArrowUp, InfoIcon } from 'lucide-react';
import React, { useMemo } from 'react'
import { MetricsLoader } from '@/app/loaders';
import { formatNumber } from '@/lib';
import ToolTip from './tooltip';

export const DashboardMetrics = () => {
    const {loading, totalBEVs, totalPHEVs, totalEvs, percentageBEVs, averagePerYear, percentagePHEVs } = useFetchMetricInformation()
    const analytics = useMemo(() => {
        return [
            {
                title: "Total Electric Vehicles",
                value: formatNumber(totalEvs),
                trend: "up",
                message: 'The total number of Electric Vehicles in the dataset'
            },
            {
                title: "Total BEVs",
                value: formatNumber(totalBEVs),
                change: `${percentageBEVs}%`,
                trend: "up",
                message: 'The total number of Battery Electric Vehicles (BEVs)'

            },
            {
                title: "Total PHEVs",
                value: formatNumber(totalPHEVs),
                change: `${percentagePHEVs}%`,
                trend: "down",
                message: 'The total number of Plug-in Hybrids Electric Vehicles (PHEVs)'
            },
            {
                title: "Avg. Vehicles per Year",
                value: formatNumber(averagePerYear),
                trend: "up",
                message: 'The average number of electric vehicles per year.'
            },
        ];
    }, [totalBEVs]);
if (loading) return <MetricsLoader />;

  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        	{analytics.map((metric, index) => (
				<Card key={index} className="relative gap-3 rounded-md">
					<CardHeader className="flex flex-row items-start justify-between space-y-0 ">
						<div className="space-y-1">
							<h3 className="font-medium text-[12px]/[26px] text-grey-900">{metric.title}</h3>
						</div>
                        <ToolTip message={metric.message} />
                        </CardHeader>
					<CardContent className="flex items-end justify-between">
						<div className="space-y-1">
							<span className="font-normal text-[18px]/[30px]">{metric.value}</span>
							<p className="text-[10px] text-muted-foreground leading-5 md:text-xs">
								Metrics
							</p>
						</div>

						<div
							className={`flex items-center gap-0.5 rounded-lg px-2 py-1 text-[10px] ${
								metric.trend === "up" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
							}`}
						>
							{metric.trend === "up" ? (
								<ArrowUp  className="size-2.5 fill-current" />
							) : (
								<ArrowDown  className="size-2.5 fill-current" />
							)}
							{metric.change}
						</div>
					</CardContent>
				</Card>
			))}
    </div>
  )
}
