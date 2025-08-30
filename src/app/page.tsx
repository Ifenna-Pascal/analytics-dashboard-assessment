'use client'
import { DashboardMetrics, EVTrendsPerYear, TableDisplay } from "./widget";
import { Shell } from "@/components/shell";

export default function Home() {
  return (
    <Shell>
      <div className="pt-4 pb-2">
        <h2 className="pl-1 text-center uppercase text-xl">Kaggle Electric Vehicles Dataset Analysis</h2>
      </div>
      <DashboardMetrics />
      <EVTrendsPerYear />
      <br />
      <TableDisplay />
    </Shell>
  );
}
