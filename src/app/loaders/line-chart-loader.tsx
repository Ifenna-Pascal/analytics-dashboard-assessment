import { Skeleton } from "@/components/ui/skeleton";

export const LineChartMetricsLoader = () => {
  return (
    <div className="grid gap-3 px-6 pb-2">
      <Skeleton className="h-9 w-full" />
      <Skeleton className="h-9 w-full" />
      <Skeleton className="h-9 w-full" />
      <Skeleton className="h-9 w-full" />
    </div>
  );
};
