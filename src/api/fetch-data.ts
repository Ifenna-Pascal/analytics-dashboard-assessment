import { csvToJson } from './use-csv-json-convert';

const CSV_URL =
  'https://raw.githubusercontent.com/vedant-patil-mapup/analytics-dashboard-assessment/refs/heads/main/data-to-visualize/Electric_Vehicle_Population_Data.csv';

export const fetchData = async () => {
  return await csvToJson(CSV_URL);
};
