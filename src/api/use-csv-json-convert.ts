type IObject = Record<string, string>
export async function csvToJson(url:string) {
    const response = await fetch(url);
    const csvText = await response.text();
  
    const rows = csvText.trim().split("\n");
  
    const headers = rows[0].split(",");
  
    const json = rows.slice(1).map(row => {
      const values = row.split(",");
      return headers.reduce((obj:IObject, header, index) => {
        obj[header] = values[index];
        return obj;
      }, {});
    });
    console.log(json, 'JSON')
    return json;
  }
