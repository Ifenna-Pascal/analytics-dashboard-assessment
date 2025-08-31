import { Skeleton } from '@/components/ui/skeleton';
import { InfoIcon } from 'lucide-react';

export const MetricsLoader = () => {
  return (
    <div className="flex items-center justify-between gap-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <div className="grid w-full flex-1 gap-6" key={index}>
          <div className="rounded-xl bg-white p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="h-4 w-24 rounded bg-gray-200" />
                <div className="h-3 w-16 rounded bg-gray-200" />
              </div>
              <InfoIcon className="h-4 w-4 text-gray-400" />
            </div>
            <Skeleton className="mt-4 h-8 w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};
