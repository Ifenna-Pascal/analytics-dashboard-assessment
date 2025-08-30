import { LineChartMetricsLoader } from "@/app/loaders";
import { useFetchTopVehiclesByRange } from "@/hooks/analysis-by-range";
import { SearchIcon } from "lucide-react";
import { useMemo, useState } from "react";

export const TableWithFilters = () => {
  const [search, setSearch] = useState("");
  const [filterMinCount, setFilterMinCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, analysisByPrice:data  } = useFetchTopVehiclesByRange()
  const itemsPerPage = 7;
  const filteredData = useMemo(() => {
    return data
      .filter((item) =>
        item.make.toLowerCase().includes(search.toLowerCase())
      )
      .filter((item) => item.count >= filterMinCount);
  }, [data, search, filterMinCount]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
 if (loading) 
      <LineChartMetricsLoader />
  return (
    <div className="p-4 bg-white rounded-xl">
      <div className="flex flex-wrap justify-between  gap-4 mb-5 items-center">
        <div className="relative w-[50%]">
          <SearchIcon className="absolute left-0 text-gray-300 size-4 top-[10px] mr-3"/>
        <input
          type="text"
          placeholder="Search manufacturer..."
          className="px-3 py-2  text-[13px] border-b border-gray-200 pl-6 text-gray-400 focus:border-none w-full"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
        />
        </div>
        <select
          className="px-6 py-2 border-none focus:border-none text-[13px] rounded-sm"
          value={filterMinCount}
          onChange={(e) => {
            setFilterMinCount(Number(e.target.value));
            setCurrentPage(1);
          }}
        >
          <option className="text-[13px]" value={0}>All manufacturers</option>
          <option className="text-[13px]" value={2}>At least 2 models</option>
          <option className="text-[13px]" value={5}>At least 5 models</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <td className="px-4 py-2 text-[13px] font-semibold text-left">Manufacturer</td>
              <td className="px-4 py-2 text-[13px] text-left font-semibold">Avg MSRP ($)</td>
              <td className="px-4 py-2 text-[13px] text-left font-semibold">Min MSRP ($)</td>
              <td className="px-4 py-2 text-[13px] text-left font-semibold">Max MSRP ($)</td>
              <td className="px-4 py-2 text-[13px] text-left font-semibold"># Models</td>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item, i) => (
              <tr
                key={i}
                className="odd:bg-white even:bg-gray-50 hover:bg-blue-50"
              >
                <td className="px-4 text-[13px] py-2 font-medium">{item.make}</td>
                <td className="px-4 text-[13px] py-2">{item.avgMSRP.toLocaleString()}</td>
                <td className="px-4 text-[13px] py-2">{item.minMSRP.toLocaleString()}</td>
                <td className="px-4 text-[13px] py-2">{item.maxMSRP.toLocaleString()}</td>
                <td className="px-4 text-[13px] py-2">{item.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4">
        <button
          className="px-3 cursor-pointer py-1 text-[13px] underline disabled:opacity-50"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
        >
          Prev
        </button>
        <span className="text-[12px]">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="px-3 py-1 cursor-pointer text-[13px] underline rounded disabled:opacity-50"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};
